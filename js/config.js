
"use strict";

window.CTRLCLIMA_CONFIG = {
  projectUrl: "http://localhost:5173/",

  languages: {
    pt: "pt-BR",
    en: "en-US",
    es: "es-ES"
  },

  content: {
    pt: {
      skip: "Pular para o conteúdo principal",
      openMenu: "Abrir menu",
      close: "Fechar",
      access: "Acessibilidade",
      language: "Selecionar idioma",

      accessDescription: "Personalize sua experiência de navegação.",
      visualGroup: "Aparência e visualização",
      navigationGroup: "Navegação e leitura",
      voiceGroup: "Assistente de leitura",
      voiceButton: "Leitura por voz",
      voiceHint: "Ouça o conteúdo da página",

      contrast: "Alto contraste",
      largeText: "Texto maior",
      grayscale: "Escala de cinza",
      readingFont: "Fonte simples",
      spacing: "Mais espaçamento",
      lineSpacing: "Altura das linhas",
      focusMode: "Destacar foco",
      underlineLinks: "Destacar links",
      readingGuide: "Guia de leitura",
      reduceMotion: "Reduzir animações",

      readSection: "Ler seção atual",
      readAll: "Ler todo o conteúdo",
      pause: "Pausar leitura",
      resume: "Continuar leitura",
      stop: "Parar leitura",
      speed: "Velocidade da voz",
      reset: "Restaurar preferências",
      help: "Use Tab e Enter para navegar. Atalhos: Alt+1 acessibilidade; Alt+2 leitura; Alt+3 parar.",

      navMission: "Missão",
      navFeatures: "Recursos",
      navSources: "Fontes NASA",
      navMethod: "Metodologia",
      navTech: "Tecnologia",
      navTeam: "Equipe",

      heroOverline: "VULCANODEV / DOCUMENTAÇÃO TÉCNICA",
      heroTitle: "A TERRA<br>CONTA <em>HISTÓRIAS.</em>",
      heroText: "O CTRLClima transforma a investigação de tendências ambientais em uma experiência visual, científica e acessível.",
      explore: "EXPLORAR DOCUMENTAÇÃO ↗",
      sourcesBtn: "FONTES CIENTÍFICAS ↓",

      missionKicker: "01 — NOSSA MISSÃO",
      missionTitle: "ENTENDER O PLANETA.<br><em>ALÉM DOS NÚMEROS.</em>",
      missionLead: "Investigar como temperatura, precipitação e temperatura da superfície terrestre variam no tempo e no espaço.",
      missionText: "O CTRLClima busca tornar as séries temporais compreensíveis, com fontes rastreáveis, tendências exploratórias e indicação clara das limitações. Uma tendência ambiental não comprova, isoladamente, causalidade sobre doenças.",

      statVariables: "Variáveis ambientais",
      statSources: "Fontes NASA selecionadas",
      statYears: "Anos de projeção ilustrativa",
      statLanguages: "Idiomas disponíveis",

      featuresKicker: "02 — FUNCIONALIDADES",
      featuresTitle: "DA OBSERVAÇÃO<br><em>À INTERPRETAÇÃO.</em>",

      sourcesKicker: "03 — FONTES CIENTÍFICAS",
      sourcesTitle: "CIÊNCIA COM<br><em>ORIGEM RASTREÁVEL.</em>",
      lstNote: "ATENÇÃO: a temperatura da superfície terrestre (LST) não é a mesma medida que a temperatura do ar. Não se deve confundi-las.",

      methodKicker: "04 — METODOLOGIA",
      methodTitle: "DOS DADOS<br><em>À EVIDÊNCIA.</em>",
      methodNote: "LIMITE CIENTÍFICO: regressão linear e projeção de cinco anos são exploratórias. Mann-Kendall e inclinação de Sen não foram implementados; não há significância estatística validada.",

      techKicker: "05 — ARQUITETURA TÉCNICA",
      techTitle: "TECNOLOGIA A SERVIÇO<br><em>DA CIÊNCIA.</em>",
      archSources: "FONTES",
      archInterface: "INTERFACE",
      techNote: "O fluxo não utiliza banco de dados, ORM, Prisma ou MariaDB. Integrações e resultados ainda dependem de validação com dados reais.",

      inclusiveKicker: "06 — ACESSIBILIDADE E SAÚDE",
      inclusiveTitle: "CONHECIMENTO<br><em>PARA MAIS PESSOAS.</em>",

      verifyKicker: "07 — VERIFICAÇÃO E RESPONSABILIDADE",
      verifyTitle: "TRANSPARÊNCIA<br><em>EM CADA ETAPA.</em>",
      references: "REFERÊNCIAS",

      teamKicker: "08 — NOSSA EQUIPE",
      teamText: "Equipe responsável pela pesquisa, desenvolvimento, revisão científica e validação do CTRLClima.",
      openProject: "ACESSAR O CTRLCLIMA ↗",
      backTop: "VOLTAR AO INÍCIO ↑",
      independent: "Projeto independente da equipe VulcanoDev",

      voiceUnsupported: "Este navegador não oferece leitura por voz.",
      voiceStarted: "Leitura iniciada.",
      voicePaused: "Leitura pausada.",
      voiceStopped: "Leitura interrompida.",
      voiceDone: "Leitura finalizada.",

      features: [
        [
          "Investigação ambiental",
          "Selecionar variável, região e período e apresentar dados e metadados. O fluxo foi desenvolvido, mas o carregamento de países apresenta uma falha."
        ],
        [
          "Séries temporais",
          "Gráficos históricos com linhas de tendência desenvolvidos. A validação com dados reais ainda está pendente."
        ],
        [
          "Estatística exploratória",
          "Regressão linear e projeção ilustrativa de cinco anos, ainda sem conferência dos resultados com dados reais."
        ],
        [
          "Comparação regional",
          "Comparação de séries equivalentes e taxas de mudança, planejada para uma etapa posterior."
        ],
        [
          "Clima e saúde",
          "Contextualização educativa com referências da Organização Mundial da Saúde. Não constitui previsão médica."
        ],
        [
          "Relatórios científicos",
          "Proveniência, gráficos, métodos, limitações e referências. A geração e validação ainda estão pendentes."
        ]
      ],

      sources: [
        [
          "NASA Giovanni",
          "Código de integração desenvolvido para séries regionais de temperatura do ar ou precipitação. Produtos, unidades, períodos e metadados ainda precisam ser validados com dados reais."
        ],
        [
          "NASA AppEEARS / MOD11A2.061",
          "Integração preparada para temperatura da superfície diurna e noturna, com composições de oito dias e resolução nominal próxima de 1 km. Extração, fatores de escala e filtros de qualidade pendentes."
        ]
      ],

      methods: [
        [
          "Proveniência",
          "Identificar produto, versão, região, unidade, licença e data de acesso."
        ],
        [
          "Preparação",
          "Conferir registros, lacunas, filtros de qualidade e transformações necessárias."
        ],
        [
          "Harmonização",
          "Considerar escalas temporais e espaciais, sazonalidade e dados ausentes."
        ],
        [
          "Visualização",
          "Apresentar séries com eixos, legendas, fontes, regiões e unidades."
        ],
        [
          "Regressão exploratória",
          "Estimar a direção e a taxa de mudança, com conferência dos resultados pendente."
        ],
        [
          "Interpretação e reprodutibilidade",
          "Registrar limitações, procedimentos, exportações e verificações independentes."
        ]
      ],

      inclusive: [
        [
          "Acessibilidade e idiomas",
          "Esta apresentação oferece português, inglês e espanhol, navegação por teclado, alto contraste, ajustes visuais, leitura por voz e integração com VLibras. A acessibilidade ainda exige testes práticos com usuários e leitores de tela."
        ],
        [
          "Clima e saúde humana",
          "A OMS documenta os riscos do calor extremo. O CTRLClima oferece contexto educativo, sem prever doenças, estimar riscos clínicos individuais ou afirmar causalidade sem evidências."
        ]
      ],

      verify: [
        [
          "Estado de validação",
          "Giovanni: código desenvolvido; AppEEARS: código preparado. Extrações reais, qualidade de dados, regressão, projeção e acessibilidade ainda precisam de testes. A falha no carregamento de países continua pendente."
        ],
        [
          "IA e responsabilidade",
          "O ChatGPT apoiou discussões de arquitetura, interface e documentação. A equipe VulcanoDev é responsável pela revisão do conteúdo, conferência dos cálculos, testes e declaração do uso de IA conforme as regras da competição."
        ]
      ]
    },

    en: {
      skip: "Skip to main content",
      openMenu: "Open menu",
      close: "Close",
      access: "Accessibility",
      language: "Select language",

      accessDescription: "Customize your browsing experience.",
      visualGroup: "Appearance and display",
      navigationGroup: "Navigation and reading",
      voiceGroup: "Reading assistant",
      voiceButton: "Voice reading",
      voiceHint: "Listen to the page content",

      contrast: "High contrast",
      largeText: "Larger text",
      grayscale: "Grayscale",
      readingFont: "Simple font",
      spacing: "Increase spacing",
      lineSpacing: "Line spacing",
      focusMode: "Highlight focus",
      underlineLinks: "Highlight links",
      readingGuide: "Reading guide",
      reduceMotion: "Reduce animations",

      readSection: "Read current section",
      readAll: "Read all content",
      pause: "Pause reading",
      resume: "Resume reading",
      stop: "Stop reading",
      speed: "Speech speed",
      reset: "Reset preferences",
      help: "Use Tab and Enter to navigate. Shortcuts: Alt+1 accessibility; Alt+2 reading; Alt+3 stop.",

      navMission: "Mission",
      navFeatures: "Features",
      navSources: "NASA sources",
      navMethod: "Methodology",
      navTech: "Technology",
      navTeam: "Team",

      heroOverline: "VULCANODEV / TECHNICAL DOCUMENTATION",
      heroTitle: "EARTH<br>TELLS <em>STORIES.</em>",
      heroText: "CTRLClima turns the investigation of environmental trends into a visual, scientific, and accessible experience.",
      explore: "EXPLORE DOCUMENTATION ↗",
      sourcesBtn: "SCIENTIFIC SOURCES ↓",

      missionKicker: "01 — OUR MISSION",
      missionTitle: "UNDERSTAND EARTH.<br><em>BEYOND THE NUMBERS.</em>",
      missionLead: "Investigate how air temperature, precipitation and land surface temperature change across space and time.",
      missionText: "CTRLClima aims to make time series understandable through traceable sources, exploratory trends and clearly stated limitations. An environmental trend alone does not demonstrate disease causation.",

      statVariables: "Environmental variables",
      statSources: "Selected NASA sources",
      statYears: "Years of illustrative projection",
      statLanguages: "Available languages",

      featuresKicker: "02 — FEATURES",
      featuresTitle: "FROM OBSERVATION<br><em>TO INTERPRETATION.</em>",

      sourcesKicker: "03 — SCIENTIFIC SOURCES",
      sourcesTitle: "SCIENCE WITH<br><em>TRACEABLE SOURCES.</em>",
      lstNote: "NOTE: land surface temperature (LST) is not the same measurement as air temperature. They should not be confused.",

      methodKicker: "04 — METHODOLOGY",
      methodTitle: "FROM DATA<br><em>TO EVIDENCE.</em>",
      methodNote: "SCIENTIFIC LIMITATION: linear regression and the five-year projection are exploratory. Mann-Kendall and Sen's slope have not been implemented, and statistical significance has not been validated.",

      techKicker: "05 — TECHNICAL ARCHITECTURE",
      techTitle: "TECHNOLOGY IN SERVICE<br><em>OF SCIENCE.</em>",
      archSources: "SOURCES",
      archInterface: "INTERFACE",
      techNote: "The pipeline uses no database, ORM, Prisma or MariaDB. Integrations and results still require validation with real data.",

      inclusiveKicker: "06 — ACCESSIBILITY AND HEALTH",
      inclusiveTitle: "KNOWLEDGE<br><em>FOR MORE PEOPLE.</em>",

      verifyKicker: "07 — VALIDATION AND RESPONSIBILITY",
      verifyTitle: "TRANSPARENCY<br><em>AT EVERY STEP.</em>",
      references: "REFERENCES",

      teamKicker: "08 — OUR TEAM",
      teamText: "The team responsible for CTRLClima research, development, scientific review and validation.",
      openProject: "OPEN CTRLCLIMA ↗",
      backTop: "BACK TO TOP ↑",
      independent: "An independent project by team VulcanoDev",

      voiceUnsupported: "Speech synthesis is not supported by this browser.",
      voiceStarted: "Reading started.",
      voicePaused: "Reading paused.",
      voiceStopped: "Reading stopped.",
      voiceDone: "Reading finished.",

      features: [
        [
          "Environmental investigation",
          "Select a variable, region and period, then display data and metadata. The workflow was developed, but country loading has a known issue."
        ],
        [
          "Time series",
          "Historical charts and trend lines have been developed. Validation with real data is still pending."
        ],
        [
          "Exploratory statistics",
          "Linear regression and an illustrative five-year projection have not yet been checked against real data."
        ],
        [
          "Regional comparison",
          "Comparison of equivalent series and rates of change is planned for a later phase."
        ],
        [
          "Climate and health",
          "Educational context based on World Health Organization references. It is not a medical forecast."
        ],
        [
          "Scientific reports",
          "Provenance, charts, methods, limitations and references. Report generation and validation are pending."
        ]
      ],

      sources: [
        [
          "NASA Giovanni",
          "Integration code has been developed for regional air-temperature or precipitation time series. Products, units, periods and metadata still need validation with real data."
        ],
        [
          "NASA AppEEARS / MOD11A2.061",
          "Integration prepared for daytime and nighttime land surface temperature, with eight-day composites and nominal resolution near 1 km. Extraction, scale factors and quality filters are pending."
        ]
      ],

      methods: [
        [
          "Provenance",
          "Identify the product, version, region, units, license and access date."
        ],
        [
          "Preparation",
          "Check records, missing values, quality filters and required transformations."
        ],
        [
          "Harmonization",
          "Consider temporal and spatial scales, seasonality and missing data."
        ],
        [
          "Visualization",
          "Display time series with axes, legends, sources, regions and units."
        ],
        [
          "Exploratory regression",
          "Estimate the direction and rate of change; result verification remains pending."
        ],
        [
          "Interpretation and reproducibility",
          "Record limitations, procedures, exports and independent checks."
        ]
      ],

      inclusive: [
        [
          "Accessibility and languages",
          "This presentation supports Portuguese, English and Spanish, keyboard navigation, high contrast, visual adjustments, speech playback and VLibras integration. Practical accessibility testing with users and screen readers is still required."
        ],
        [
          "Climate and human health",
          "WHO documents the health risks of extreme heat. CTRLClima provides educational context without predicting diseases, estimating individual clinical risks or claiming causation without evidence."
        ]
      ],

      verify: [
        [
          "Validation status",
          "Giovanni: code developed; AppEEARS: code prepared. Real extraction, data quality, regression, projection and accessibility still require testing. The country-loading issue is unresolved."
        ],
        [
          "AI and responsibility",
          "ChatGPT supported discussions of architecture, interface and documentation. Team VulcanoDev remains responsible for reviewing content, checking calculations, testing and disclosing AI use according to competition rules."
        ]
      ]
    },

    es: {
      skip: "Saltar al contenido principal",
      openMenu: "Abrir menú",
      close: "Cerrar",
      access: "Accesibilidad",
      language: "Seleccionar idioma",

      accessDescription: "Personaliza tu experiencia de navegación.",
      visualGroup: "Apariencia y visualización",
      navigationGroup: "Navegación y lectura",
      voiceGroup: "Asistente de lectura",
      voiceButton: "Lectura por voz",
      voiceHint: "Escucha el contenido de la página",

      contrast: "Alto contraste",
      largeText: "Texto más grande",
      grayscale: "Escala de grises",
      readingFont: "Fuente sencilla",
      spacing: "Mayor espaciado",
      lineSpacing: "Espaciado entre líneas",
      focusMode: "Destacar foco",
      underlineLinks: "Destacar enlaces",
      readingGuide: "Guía de lectura",
      reduceMotion: "Reducir animaciones",

      readSection: "Leer sección actual",
      readAll: "Leer todo el contenido",
      pause: "Pausar lectura",
      resume: "Continuar lectura",
      stop: "Detener lectura",
      speed: "Velocidad de voz",
      reset: "Restablecer preferencias",
      help: "Usa Tab y Enter para navegar. Atajos: Alt+1 accesibilidad; Alt+2 lectura; Alt+3 detener.",

      navMission: "Misión",
      navFeatures: "Funciones",
      navSources: "Fuentes NASA",
      navMethod: "Metodología",
      navTech: "Tecnología",
      navTeam: "Equipo",

      heroOverline: "VULCANODEV / DOCUMENTACIÓN TÉCNICA",
      heroTitle: "LA TIERRA<br>CUENTA <em>HISTORIAS.</em>",
      heroText: "CTRLClima convierte la investigación de tendencias ambientales en una experiencia visual, científica y accesible.",
      explore: "EXPLORAR DOCUMENTACIÓN ↗",
      sourcesBtn: "FUENTES CIENTÍFICAS ↓",

      missionKicker: "01 — NUESTRA MISIÓN",
      missionTitle: "ENTENDER EL PLANETA.<br><em>MÁS ALLÁ DE LOS NÚMEROS.</em>",
      missionLead: "Investigar cómo cambian la temperatura del aire, la precipitación y la temperatura superficial terrestre en el tiempo y el espacio.",
      missionText: "CTRLClima busca facilitar la comprensión de las series temporales mediante fuentes trazables, tendencias exploratorias y limitaciones explícitas. Una tendencia ambiental por sí sola no demuestra causalidad sobre enfermedades.",

      statVariables: "Variables ambientales",
      statSources: "Fuentes NASA seleccionadas",
      statYears: "Años de proyección ilustrativa",
      statLanguages: "Idiomas disponibles",

      featuresKicker: "02 — FUNCIONALIDADES",
      featuresTitle: "DE LA OBSERVACIÓN<br><em>A LA INTERPRETACIÓN.</em>",

      sourcesKicker: "03 — FUENTES CIENTÍFICAS",
      sourcesTitle: "CIENCIA CON<br><em>ORIGEN TRAZABLE.</em>",
      lstNote: "ATENCIÓN: la temperatura superficial terrestre (LST) no es la misma medida que la temperatura del aire. No deben confundirse.",

      methodKicker: "04 — METODOLOGÍA",
      methodTitle: "DE LOS DATOS<br><em>A LA EVIDENCIA.</em>",
      methodNote: "LÍMITE CIENTÍFICO: la regresión lineal y la proyección de cinco años son exploratorias. Mann-Kendall y la pendiente de Sen no están implementados, y la significación estadística no está validada.",

      techKicker: "05 — ARQUITECTURA TÉCNICA",
      techTitle: "TECNOLOGÍA AL SERVICIO<br><em>DE LA CIENCIA.</em>",
      archSources: "FUENTES",
      archInterface: "INTERFAZ",
      techNote: "El flujo no utiliza base de datos, ORM, Prisma ni MariaDB. Las integraciones y los resultados aún necesitan validación con datos reales.",

      inclusiveKicker: "06 — ACCESIBILIDAD Y SALUD",
      inclusiveTitle: "CONOCIMIENTO<br><em>PARA MÁS PERSONAS.</em>",

      verifyKicker: "07 — VERIFICACIÓN Y RESPONSABILIDAD",
      verifyTitle: "TRANSPARENCIA<br><em>EN CADA ETAPA.</em>",
      references: "REFERENCIAS",

      teamKicker: "08 — NUESTRO EQUIPO",
      teamText: "Equipo responsable de la investigación, el desarrollo, la revisión científica y la validación de CTRLClima.",
      openProject: "ACCEDER A CTRLCLIMA ↗",
      backTop: "VOLVER AL INICIO ↑",
      independent: "Proyecto independiente del equipo VulcanoDev",

      voiceUnsupported: "Este navegador no admite síntesis de voz.",
      voiceStarted: "Lectura iniciada.",
      voicePaused: "Lectura pausada.",
      voiceStopped: "Lectura detenida.",
      voiceDone: "Lectura finalizada.",

      features: [
        [
          "Investigación ambiental",
          "Seleccionar una variable, región y período, y mostrar datos y metadatos. El flujo está desarrollado, pero la carga de países presenta un problema conocido."
        ],
        [
          "Series temporales",
          "Se desarrollaron gráficos históricos y líneas de tendencia. La validación con datos reales sigue pendiente."
        ],
        [
          "Estadística exploratoria",
          "Regresión lineal y proyección ilustrativa de cinco años, aún sin verificar con datos reales."
        ],
        [
          "Comparación regional",
          "La comparación de series equivalentes y tasas de cambio está prevista para una etapa posterior."
        ],
        [
          "Clima y salud",
          "Contexto educativo basado en referencias de la Organización Mundial de la Salud. No es una predicción médica."
        ],
        [
          "Informes científicos",
          "Procedencia, gráficos, métodos, limitaciones y referencias. Generación y validación pendientes."
        ]
      ],

      sources: [
        [
          "NASA Giovanni",
          "Código de integración desarrollado para series regionales de temperatura del aire o precipitación. Productos, unidades, períodos y metadatos aún necesitan validación con datos reales."
        ],
        [
          "NASA AppEEARS / MOD11A2.061",
          "Integración preparada para temperatura superficial diurna y nocturna, con composiciones de ocho días y resolución nominal cercana a 1 km. Extracción, factores de escala y filtros de calidad pendientes."
        ]
      ],

      methods: [
        [
          "Procedencia",
          "Identificar el producto, versión, región, unidades, licencia y fecha de acceso."
        ],
        [
          "Preparación",
          "Comprobar registros, datos faltantes, filtros de calidad y transformaciones necesarias."
        ],
        [
          "Armonización",
          "Considerar escalas temporales y espaciales, estacionalidad y datos faltantes."
        ],
        [
          "Visualización",
          "Mostrar series con ejes, leyendas, fuentes, regiones y unidades."
        ],
        [
          "Regresión exploratoria",
          "Estimar la dirección y tasa de cambio; la verificación de los resultados sigue pendiente."
        ],
        [
          "Interpretación y reproducibilidad",
          "Registrar limitaciones, procedimientos, exportaciones y verificaciones independientes."
        ]
      ],

      inclusive: [
        [
          "Accesibilidad e idiomas",
          "Esta presentación ofrece portugués, inglés y español, navegación por teclado, alto contraste, ajustes visuales, lectura por voz e integración con VLibras. Aún se requieren pruebas prácticas con usuarios y lectores de pantalla."
        ],
        [
          "Clima y salud humana",
          "La OMS documenta los riesgos del calor extremo. CTRLClima ofrece contexto educativo sin predecir enfermedades, estimar riesgos clínicos individuales ni afirmar causalidad sin evidencia."
        ]
      ],

      verify: [
        [
          "Estado de validación",
          "Giovanni: código desarrollado; AppEEARS: código preparado. Extracción real, calidad de datos, regresión, proyección y accesibilidad aún necesitan pruebas. El problema de carga de países sigue pendiente."
        ],
        [
          "IA y responsabilidad",
          "ChatGPT apoyó discusiones sobre arquitectura, interfaz y documentación. VulcanoDev es responsable de revisar contenido, verificar cálculos, realizar pruebas y declarar el uso de IA según las reglas de la competencia."
        ]
      ]
    }
  }
};
