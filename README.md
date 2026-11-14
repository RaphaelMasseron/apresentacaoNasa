# CTRLClima — Earth System Trend Detective

**Team:** VulcanoDev  
**Challenge:** NASA Space Apps Challenge 2026 — Be an Earth System Trend Detective!  
**Team members:** Raphael Masseron and Leticia Alves  
**Organization:** Senac RJ, Brazil [TO VERIFY official attribution]  
**Status:** Experimental prototype; scientific data integration and end-to-end validation pending.

> **Important:** This repository is not an official NASA product. NASA and other data providers do not endorse CTRLClima. Synthetic test results must not be presented as Earth observations.

## Overview

CTRLClima is a proposed web platform for exploring environmental time series, estimating trends, assessing statistical evidence, and explaining possible implications of extreme heat for human health. The team's objective is to make environmental measurements and their limitations easier to understand.

## Challenge

The Earth System Trend Detective challenge asks participants to select Earth science variables, analyze particular regions and historical periods, visualize time series, estimate rates of change, and evaluate statistical significance. A trend in one region may differ from a trend in another. CTRLClima addresses these questions without assuming that correlation establishes causation.

**Challenge reference:** https://www.spaceappschallenge.org/2026/challenges/earth-system-trend-detective/ [TO VERIFY current page and exact citation]

## Features

### Implemented in the separately inspected experimental module

- CSV parser for a **normalized** `year,month,value` format.
- Validation of header, numeric values, year/month ranges, and duplicate observations; rejection of incomplete years.
- Annual arithmetic means, linear-regression slope per decade, and an **exploratory** approximate Mann–Kendall p-value.
- Proposed NestJS `ScienceModule` exposing `GET /science/trend` (or `/api/science/trend` when a global `api` prefix is enabled).
- Proposed React `ScienceTrendPage` showing annual values, slope, statistical caution, loading and error states.
- Five unit tests with synthetic data (5 passed in the inspected module on Node.js v22.16.0, November 14, 2026).

**Not established:** These files are not proof of successful integration into the existing CTRLClima application.

### Planned / not yet verified

- Real NASA Giovanni time-series import and verified provenance.
- AppEEARS MODIS land-surface-temperature extraction and quality filtering.
- Interactive selection of datasets, regions and periods, and mapped comparisons.
- Statistical validation accounting for missingness, seasonality, autocorrelation, uncertainty, and differences between regions.
- Reproducible export and reviewed health-context explanations.

## Demo

- Public deployment URL: **[TO VERIFY]**.
- Public demo video: **[TO VERIFY]**.
- Repository URL and access permissions: **[TO VERIFY]**.

### Reproduce the experimental module locally

1. Obtain the existing CTRLClima repository [TO VERIFY repository link and revision].
2. Copy `trend.ts`, `science.service.ts`, `science.controller.ts`, and `science.module.ts` into `backend/src/science/`.
3. Register `ScienceModule` in the existing `AppModule` imports.
4. Provide `backend/data/giovanni-normalized.csv` using the exact header `year,month,value`. It must contain at least ten complete years, with one valid observation for each of the twelve months of each included year. **Do not label synthetic fixtures as NASA data.** The source Giovanni CSV must first be transformed, with metadata and units preserved. No automatic converter is included.
5. Copy `ScienceTrendPage.tsx` to `frontend/src/pages/` and register an appropriate React Router route.
6. Confirm the NestJS global prefix and frontend-to-backend routing. The page currently requests `/api/science/trend`; configure a development proxy or same-origin hosting if necessary.

**Commands** (run from the folders containing the corresponding `package.json`):

```bash
# Backend terminal
cd backend
npm ci
npm run start:dev

# Frontend terminal
cd frontend
npm ci
npm run dev
```

These commands assume the existing package manifests and scripts match these names. **[TO VERIFY against the complete repository.]** There is no standalone installable application in the experimental module alone.

The endpoint, when the backend uses the global `api` prefix, is proposed as:

```text
GET http://localhost:3000/api/science/trend
```

Port 3000 is an example only; **[TO VERIFY backend port and proxy]**.

### Example input (synthetic format, not NASA measurements)

```csv
year,month,value
2005,1,20.0
2005,2,20.1
```

This excerpt illustrates the schema **but is intentionally too short to pass analysis**. For a successful execution, use a fully populated, validated CSV as described above.

### Unit tests

From the directory containing `trend.test.ts` and `trend.ts`:

```bash
node --experimental-strip-types --test trend.test.ts
```

Inspected run: Node.js **v22.16.0**, 5 passed / 0 failed, using synthetic fixtures. No integrated application test or independent scientific validation was performed.

## Architecture

```mermaid
flowchart TD
  G[Giovanni CSV export] --> I[Offline import and normalization]
  A[AppEEARS export - planned] --> I
  I --> V[Validate provenance, units and observations]
  V --> S[NestJS science service]
  S --> T[Exploratory trend analysis]
  T --> U[React results page]
  V -. future persistence .-> DB[(MariaDB)]
  U --> H[Reviewed climate and health context - planned]
```

The experimental service reads a CSV from disk. **MariaDB persistence is not implemented in that isolated module.** Data acquisition and manual normalization must be documented independently.

## Installation and Configuration

**Technology and version inventory:**

| Component | Version/status |
| --- | --- |
| Node.js | v22.16.0 used for the inspected isolated test run; team machine version [TO VERIFY] |
| npm | [TO VERIFY with `npm --version`] |
| React | Existing project uses React; exact current version [TO VERIFY in `frontend/package.json`] |
| TypeScript | Existing project uses TypeScript; exact current version [TO VERIFY] |
| NestJS | Existing backend uses NestJS; exact version [TO VERIFY in `backend/package.json`] |
| MariaDB | 10.4.32 previously reported for the team's XAMPP development environment; current installation [TO VERIFY] |
| Prisma | Previously used in the project; current version and integration [TO VERIFY] |

Do not publish actual `.env` files, account passwords, access tokens or database URLs containing secrets.

Example **`.env.example`**, illustrative and **not automatically consumed by the experimental module**:

```dotenv
PORT=3000
DATABASE_URL=mysql://YOUR_DB_USER:YOUR_DB_PASSWORD@localhost:3306/YOUR_DB_NAME
# Earthdata credentials are not needed for local CSV-only mode.
# If an authenticated integration is added, store secrets server-side only.
```

Document and verify the actual environment variable names against the installed configuration module before using them. Add `.env` to `.gitignore`.

## Usage

1. Prepare and document a real NASA dataset export.
2. Record provider, product ID, version, geographic bounds, period, units, access date and transformations.
3. Normalize it to the accepted CSV format and validate completeness.
4. Start the existing backend and frontend with compatible routing.
5. Open the registered science results route and examine the annual values and exploratory statistics.
6. **Do not claim a significant Earth trend until the statistical assumptions and results are independently verified.**

## Technologies

React, TypeScript, NestJS, Node.js and MariaDB (existing project stack; exact package versions [TO VERIFY]). The isolated exploratory analysis uses TypeScript and Node built-in testing tools; it does not require a generative AI model.

## NASA Data & Resources

- **NASA Giovanni:** https://giovanni.gsfc.nasa.gov/ — source of regional Earth science time-series exports. Specific downloaded product, version and CSV: **[TO VERIFY]**.
- **NASA AppEEARS:** https://appeears.earthdatacloud.nasa.gov/ — proposed extraction of geospatial observations and quality layers. Completed task and downloaded files: **[TO VERIFY]**.
- **Candidate MODIS product:** `MOD11A2.061` — land surface temperature and quality layers; its use in the project is **planned**, not verified. Documentation: https://lpdaac.usgs.gov/products/mod11a2v061/
- **WHO heat and health background:** https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health — context on heat-related risks, **not** direct evidence of illness in selected study regions.

Dataset licenses, required acknowledgments, specific DOIs, quality flags, product dates and redistribution permissions: **[TO VERIFY individually for each selected dataset]**. Do not imply NASA or WHO endorsement.

## Methodology

The experimental pipeline parses normalized monthly values, rejects incomplete calendar years, calculates arithmetic annual means, fits a linear slope across annual means, and estimates an approximate Mann–Kendall p-value with a correction for tied values.

**Cautions:** Monthly values may not represent identical statistics across datasets; averaging them requires a justified convention. The implemented test does not correct temporal autocorrelation. It does not estimate confidence intervals, validate spatial representativeness or automatically screen all product-specific quality flags. The reported p-value is **exploratory only**.

A scientifically defensible investigation will check data coverage, physical units, missingness, seasonal cycles, temporal dependence and independent implementations before interpreting significance or comparing regions.

## Results

**Verified in this preparation:** five isolated unit tests of the experimental statistical functions passed on synthetic test fixtures (Node.js v22.16.0, November 14, 2026). The test suite covers increasing/decreasing slopes and rejection of invalid input structures.

**Not verified:** actual NASA climate trends, Giovanni/AppEEARS imports, backend and frontend integration, user comprehension, prediction performance, medical outcomes or societal impact. No climate or health outcome figures are claimed.

## Limitations

- No confirmed real NASA dataset in the inspected experimental package.
- CSV conversion and provenance management are not automated.
- Incomplete-year rejection may exclude useful but partially observed datasets.
- Statistical inference is exploratory until independent review.
- Land surface temperature and near-surface air temperature are physically different measurements.
- Environmental correlations do not establish health causation.
- No guarantee of global location coverage, availability or production readiness.

## AI Disclosure

ChatGPT has assisted with concept development, architecture discussions, prototype specifications, draft code, documentation and review. Human team members must inspect, test, revise and approve all AI-assisted work and verify all scientific claims. No generative AI component is required for the experimental statistical pipeline.

Exact tools, model identifiers if required, prompts, extent of code adoption and compliance with the current competition rules: **[TO VERIFY and disclose according to official requirements]**.

## Team Contributions and Pre-existing Work

- **Raphael Masseron:** development and integration contributions — exact files, commit evidence and tasks **[TO VERIFY]**.
- **Leticia Alves:** research, project development and presentation contributions — exact tasks and evidence **[TO VERIFY]**.
- **Pre-existing CTRLClima work:** the team worked on a React/NestJS environmental platform before this documentation. Its pre-hackathon state and changes made during the event must be identified through repository history **[TO VERIFY]**.
- **Third parties:** acknowledge NASA data providers, scientific sources, open-source package authors and any AI assistance. Individual contribution and attribution statements require team approval.

## License

**Project source-code license: [TO VERIFY].** Do not assume that a public GitHub repository is automatically open source or apply a license without the copyright holders' approval. NASA data products and third-party assets retain their own attribution and use conditions; verify them independently.

## Future Work

- Import and validate authentic Giovanni series with fully recorded metadata.
- Add AppEEARS extraction and quality screening.
- Persist datasets and analytic outputs using the existing MariaDB data model.
- Validate seasonal and autocorrelation-aware statistical analysis independently.
- Compare regional trends using statistically appropriate methods.
- Add accessible charts, mobile interfaces, CSV exports and user testing.
- Provide reviewed public-health context without clinical predictions.

## Reproducibility and Submission Checklist

- [ ] Confirm all current package versions and installation scripts.
- [ ] Check all repository, demo, dataset, video and documentation links in an **incognito/private browser window**, without login.
- [ ] Ensure no private tokens, passwords, `.env` secrets or personal data are committed.
- [ ] Archive real source files, metadata, normalizations, and analysis scripts.
- [ ] Reproduce results from raw data and record the execution environment.
- [ ] Separate verified results from demonstrations and future work.
- [ ] Confirm applicable 2026 submission rules, credits, licensing and AI disclosure.
- [ ] Submit through the official event platform and retain submission confirmation.

**Next concrete step:** Export one real Giovanni time series with its product metadata and validate it end-to-end in the existing CTRLClima repository before replacing any `[TO VERIFY]` result claims.
