
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const cfg = window.CTRLCLIMA_CONFIG;

  if (!cfg?.content) {
    console.error("CTRLClima: config.js não foi carregado.");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const doc = document.documentElement;
  const body = document.body;

  const defaults = {
    lang: "pt",
    contrast: false,
    largeText: false,
    grayscale: false,
    readingFont: false,
    spacing: false,
    lineSpacing: false,
    focusMode: false,
    underlineLinks: false,
    readingGuide: false,
    reduceMotion: false,
    rate: 1
  };

  const visualOptions = {
    contrast: "high-contrast",
    largeText: "large-text",
    grayscale: "grayscale-mode",
    readingFont: "reading-font",
    spacing: "extra-spacing",
    lineSpacing: "line-spacing-mode",
    focusMode: "strong-focus",
    underlineLinks: "underline-links",
    readingGuide: "reading-guide-mode",
    reduceMotion: "reduce-motion"
  };

  let prefs = { ...defaults };

  // CARREGAR PREFERÊNCIAS ANTIGAS E NOVAS
  try {
    const saved = JSON.parse(
      localStorage.getItem("ctrlclima-a11y") || "{}"
    );

    if (saved && typeof saved === "object") {
      prefs = { ...prefs, ...saved };
    }

    const extra = JSON.parse(
      localStorage.getItem("ctrlclima-extra-a11y") || "{}"
    );

    if (extra && typeof extra === "object") {
      for (const key of [
        "grayscale",
        "readingFont",
        "lineSpacing",
        "underlineLinks",
        "readingGuide"
      ]) {
        if (typeof extra[key] === "boolean") {
          prefs[key] = extra[key];
        }
      }
    }
  } catch (error) {
    console.warn("Preferências indisponíveis.", error);
  }

  if (!cfg.content[prefs.lang]) {
    prefs.lang = "pt";
  }

  prefs.rate = Number(prefs.rate);

  if (!Number.isFinite(prefs.rate)) {
    prefs.rate = 1;
  }

  prefs.rate = Math.max(
    0.7,
    Math.min(1.5, prefs.rate)
  );

  for (const key of Object.keys(visualOptions)) {
    prefs[key] = prefs[key] === true;
  }

  const t = () => cfg.content[prefs.lang];

  function save() {
    try {
      localStorage.setItem(
        "ctrlclima-a11y",
        JSON.stringify(prefs)
      );

      localStorage.removeItem("ctrlclima-extra-a11y");
    } catch (error) {
      console.warn("Não foi possível salvar preferências.", error);
    }
  }

  // PROTEGER TEXTO DINÂMICO
  function escapeHTML(value) {
    return String(value).replace(
      /[&<>"']/g,
      (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[char]
    );
  }

  function cardHTML(item, index) {
    return `
      <article class="card reveal">
        <small>${String(index + 1).padStart(2, "0")}</small>
        <h3>${escapeHTML(item[0])}</h3>
        <p>${escapeHTML(item[1])}</p>
      </article>
    `;
  }

  // ELEMENTOS PRINCIPAIS
  const panel = $("accessPanel");
  const accessButton = $("accessButton");
  const menu = $("nav");
  const menuButton = $("menuButton");
  const voiceToggle = $("voiceToggle");
  const voiceTools = $("voiceTools");

  // ANIMAÇÕES
  let observer = null;

  function revealElements() {
    observer?.disconnect();

    const elements = [
      ...document.querySelectorAll(".reveal")
    ];

    const reduced =
      prefs.reduceMotion ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    if (
      reduced ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((el) => {
        el.classList.add("visible");
      });

      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.06 }
    );

    for (const el of elements) {
      if (!el.classList.contains("visible")) {
        observer.observe(el);
      }
    }
  }

  // APLICAR MODOS VISUAIS
  function applyVisualOptions() {
    for (const [key, className] of Object.entries(visualOptions)) {
      const enabled = prefs[key];

      body.classList.toggle(className, enabled);

      const button = $(key);

      if (button) {
        button.setAttribute(
          "aria-pressed",
          String(enabled)
        );
      }
    }
  }

  // TRADUÇÃO
  function render() {
    const text = t();

    doc.lang = cfg.languages[prefs.lang];
    $("language").value = prefs.lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = text[el.dataset.i18n];

      if (value !== undefined) {
        el.textContent = value;
      }
    });

    // Textos HTML definidos somente no config.js local
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = text[el.dataset.i18nHtml];

      if (value !== undefined) {
        el.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = text[el.dataset.i18nAria];

      if (value !== undefined) {
        el.setAttribute("aria-label", value);
      }
    });

    const collections = [
      ["featuresCards", "features"],
      ["sourcesCards", "sources"],
      ["inclusiveCards", "inclusive"],
      ["verifyCards", "verify"]
    ];

    for (const [id, key] of collections) {
      $(id).innerHTML = text[key].map(cardHTML).join("");
    }

    $("methodSteps").innerHTML = text.methods.map((item) => `
      <li class="reveal">
        <div>
          <h3>${escapeHTML(item[0])}</h3>
          <p>${escapeHTML(item[1])}</p>
        </div>
      </li>
    `).join("");

    applyVisualOptions();

    $("voiceRate").value = prefs.rate;
    $("rateValue").textContent =
      prefs.rate.toFixed(1) + "×";

    if (cfg.projectUrl) {
      $("openProject").href = cfg.projectUrl;
    }

    menuButton.setAttribute(
      "aria-label",
      menu.classList.contains("open")
        ? text.close
        : text.openMenu
    );

    revealElements();
    updateNavigation();
    adjustFooterControls();
  }

  // MUDANÇA DE IDIOMA
  $("language").addEventListener("change", (event) => {
    const lang = event.target.value;

    if (!cfg.content[lang]) return;

    stopSpeech();
    prefs.lang = lang;

    save();
    render();
  });

  // NOVOS E ANTIGOS CONTROLES
  for (const key of Object.keys(visualOptions)) {
    const button = $(key);

    if (!button) continue;

    button.addEventListener("click", () => {
      prefs[key] = !prefs[key];

      save();
      applyVisualOptions();
      revealElements();
    });
  }

  // RESTAURAR PREFERÊNCIAS
  $("reset").addEventListener("click", () => {
    stopSpeech();

    prefs = { ...defaults };
    save();

    voiceTools.hidden = true;
    voiceToggle.setAttribute("aria-expanded", "false");

    render();
  });

  // PAINEL DE ACESSIBILIDADE
  function togglePanel(open) {
    panel.hidden = !open;

    accessButton.setAttribute(
      "aria-expanded",
      String(open)
    );

    if (open) {
      $("contrast").focus();
    } else {
      accessButton.focus();
    }
  }

  accessButton.addEventListener("click", () => {
    togglePanel(panel.hidden);
  });

  $("closeAccess").addEventListener("click", () => {
    togglePanel(false);
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      !panel.hidden &&
      !panel.contains(event.target) &&
      !accessButton.contains(event.target)
    ) {
      panel.hidden = true;
      accessButton.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });

  // ABRIR CONTROLES DE VOZ
  voiceToggle.addEventListener("click", () => {
    const open = voiceTools.hidden;

    voiceTools.hidden = !open;
    voiceToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    if (open) {
      $("readSection").focus();
    }
  });

  // MENU RESPONSIVO
  function closeMenu() {
    menu.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      t().openMenu
    );

    menuButton.textContent = "☰";
  }

  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuButton.setAttribute(
      "aria-label",
      open ? t().close : t().openMenu
    );

    menuButton.textContent = open ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // GUIA VISUAL DE LEITURA
  function moveReadingGuide(y) {
    const safeY = Math.max(
      20,
      Math.min(window.innerHeight - 20, y)
    );

    doc.style.setProperty(
      "--reading-y",
      `${safeY}px`
    );
  }

  document.addEventListener(
    "pointermove",
    (event) => {
      if (!prefs.readingGuide) return;
      if (event.pointerType === "touch") return;

      moveReadingGuide(event.clientY);
    },
    { passive: true }
  );

  document.addEventListener("focusin", (event) => {
    if (!prefs.readingGuide) return;

    const target = event.target;

    if (!(target instanceof HTMLElement)) return;

    const rect = target.getBoundingClientRect();

    if (rect.height > 0) {
      moveReadingGuide(
        rect.top + Math.min(rect.height / 2, 25)
      );
    }
  });

  // SÍNTESE DE VOZ
  const speechSupported =
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

  let speechToken = 0;
  let chunks = [];
  let chunkIndex = 0;

  function speechStatus(key) {
    $("speechStatus").textContent = t()[key] || key;
  }

  function stopSpeech() {
    speechToken++;
    chunks = [];
    chunkIndex = 0;

    if (speechSupported) {
      window.speechSynthesis.cancel();
    }

    speechStatus("voiceStopped");
  }

  function getReadableText(root) {
    const pieces = [];

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;

          if (!parent || !node.textContent.trim()) {
            return NodeFilter.FILTER_REJECT;
          }

          if (
            parent.closest(
              ".access-panel, nav, script, style, button, .earth-wrap, [hidden], [aria-hidden='true']"
            )
          ) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    while (walker.nextNode()) {
      pieces.push(
        walker.currentNode.textContent.trim()
      );
    }

    return pieces.join(". ").replace(/\s+/g, " ");
  }

  function splitSpeech(text, limit = 170) {
    const pieces = [];
    const words = text.split(/\s+/);
    let part = "";

    for (const word of words) {
      if (
        part &&
        `${part} ${word}`.length > limit
      ) {
        pieces.push(part);
        part = "";
      }

      part += (part ? " " : "") + word;
    }

    if (part) pieces.push(part);

    return pieces;
  }

  function speakNext(token) {
    if (token !== speechToken) return;

    if (chunkIndex >= chunks.length) {
      speechStatus("voiceDone");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      chunks[chunkIndex++]
    );

    utterance.lang = cfg.languages[prefs.lang];
    utterance.rate = prefs.rate;

    const voices = window.speechSynthesis.getVoices();

    const selectedVoice =
      voices.find(
        (voice) =>
          voice.lang.toLowerCase() ===
          utterance.lang.toLowerCase()
      ) ||
      voices.find(
        (voice) =>
          voice.lang.toLowerCase().startsWith(prefs.lang)
      );

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onend = () => {
      speakNext(token);
    };

    utterance.onerror = (event) => {
      if (
        token !== speechToken ||
        event.error === "canceled" ||
        event.error === "interrupted"
      ) {
        return;
      }

      if (
        event.error === "not-allowed" ||
        event.error === "audio-busy" ||
        event.error === "synthesis-failed"
      ) {
        stopSpeech();
        speechStatus("voiceUnsupported");
        return;
      }

      speakNext(token);
    };

    window.speechSynthesis.speak(utterance);
  }

  function startSpeech(root) {
    if (!speechSupported) {
      speechStatus("voiceUnsupported");
      return;
    }

    stopSpeech();

    const text = getReadableText(root);
    if (!text) return;

    chunks = splitSpeech(text);
    chunkIndex = 0;

    const token = speechToken;

    speechStatus("voiceStarted");
    speakNext(token);
  }

  // SEÇÃO ATUAL
  function currentSection() {
    const sections = [
      ...document.querySelectorAll(".page-section")
    ];

    let selected = sections[0];

    for (const section of sections) {
      if (
        section.getBoundingClientRect().top <=
        window.innerHeight * 0.4
      ) {
        selected = section;
      }
    }

    return selected;
  }

  $("readSection").addEventListener("click", () => {
    startSpeech(currentSection());
  });

  $("readAll").addEventListener("click", () => {
    startSpeech($("main"));
  });

  $("pauseVoice").addEventListener("click", () => {
    if (!speechSupported) {
      speechStatus("voiceUnsupported");
      return;
    }

    window.speechSynthesis.pause();
    speechStatus("voicePaused");
  });

  $("resumeVoice").addEventListener("click", () => {
    if (!speechSupported) {
      speechStatus("voiceUnsupported");
      return;
    }

    window.speechSynthesis.resume();
    speechStatus("voiceStarted");
  });

  $("stopVoice").addEventListener("click", stopSpeech);

  $("voiceRate").addEventListener("input", (event) => {
    prefs.rate = Number(event.target.value);

    $("rateValue").textContent =
      prefs.rate.toFixed(1) + "×";

    save();
  });

  window.addEventListener("pagehide", () => {
    if (speechSupported) {
      window.speechSynthesis.cancel();
    }
  });

  // ATALHOS DE TECLADO
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!panel.hidden) {
        togglePanel(false);
      }

      closeMenu();
    }

    if (
      event.altKey &&
      !event.ctrlKey &&
      !event.metaKey
    ) {
      if (event.key === "1") {
        event.preventDefault();
        togglePanel(panel.hidden);
      }

      if (event.key === "2") {
        event.preventDefault();
        startSpeech(currentSection());
      }

      if (event.key === "3") {
        event.preventDefault();
        stopSpeech();
      }
    }
  });

  // NAVEGAÇÃO E BARRA DE PROGRESSO
  function updateNavigation() {
    const active = currentSection()?.id;

    menu.querySelectorAll("a").forEach((link) => {
      if (link.getAttribute("href") === `#${active}`) {
        link.setAttribute(
          "aria-current",
          "location"
        );
      } else {
        link.removeAttribute("aria-current");
      }
    });

    const max = doc.scrollHeight - window.innerHeight;

    const percentage = max > 0
      ? Math.max(
          0,
          Math.min(
            100,
            (window.scrollY / max) * 100
          )
        )
      : 0;

    $("progress").style.width = `${percentage}%`;
  }

  // EVITAR SOBREPOSIÇÃO COM O FOOTER
  function adjustFooterControls() {
    const footer = $("siteFooter");
    if (!footer) return;

    const rect = footer.getBoundingClientRect();

    const visibleHeight = Math.max(
      0,
      Math.min(window.innerHeight, rect.bottom) -
      Math.max(0, rect.top)
    );

    doc.style.setProperty(
      "--footer-clearance",
      `${Math.ceil(visibleHeight)}px`
    );
  }

  // ROLAGEM OTIMIZADA
  let scrollScheduled = false;

  function handleScroll() {
    if (scrollScheduled) return;

    scrollScheduled = true;

    requestAnimationFrame(() => {
      updateNavigation();
      adjustFooterControls();

      scrollScheduled = false;
    });
  }

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  window.addEventListener("resize", handleScroll);

  // INICIALIZAÇÃO
  render();
  adjustFooterControls();
});
