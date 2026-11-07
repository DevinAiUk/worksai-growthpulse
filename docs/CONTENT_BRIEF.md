# Content, Keyword, Usability & SEO/GEO Brief — WorksAi GrowthPulse (`growthpulse.worksai.org`)

## 1. Search Intent & Keyword Mapping
- **Primary Keyword**: `cookieless funnel analytics and conversion drop off analyzer`
- **Secondary Keywords**: `privacy first web analytics open source`, `umami analytics funnel alternative`, `salted hash session attribution`, `core web vitals conversion tracking`
- **Search Intent Classification**: Transactional / Product-Evaluation (`/`), Implementation / Setup (`/docs`), and Informational / Technical Architecture (`/guide`).
- **Google Search Console Baseline (`sc-domain:worksai.org`)**: Queried via `GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY` (`2026-01-01` to `2026-11-05`). Because the rebuilt subdomain ecosystem is newly launched, historical query click rows are `0`; keyword selection is grounded in competitive technical SERP analysis and product domain taxonomy without fabricated search volume numbers.

## 2. Title Tag, Meta Description, H1 & Canonical Structure
- **Title Tag (`<title>`)**: `WorksAi GrowthPulse — Cookieless Funnel Analytics And Conversion Drop Off Analyzer | WorksAI`
- **Meta Description**: `WorksAi GrowthPulse evaluates multi-stage conversion funnels (`landing -> pricing -> signup`) using daily-salted deterministic hashes of `(siteId, ip, userAge`
- **H1 Heading**: `WorksAi GrowthPulse: Cookieless Funnel Analytics: Measuring Stage Drop-Off and Conversion Bottlenecks Without Cross-Site Tracking Cookies`
- **Canonical Routes**:
  - `https://growthpulse.worksai.org/` — Primary Web App / Product & Binary Download Page
  - `https://growthpulse.worksai.org/docs` — Installation, Configuration, CRUD API & Privacy Disclosures
  - `https://growthpulse.worksai.org/guide` — Technical Architecture Guide, Benchmarks & FAQ
  - `https://growthpulse.worksai.org/sitemap.xml` & `https://growthpulse.worksai.org/robots.txt` (`Disallow: /api/workspace/`)

## 3. Eye-Tracking, Visual Hierarchy & Conversion Principles Applied
1. **Above-the-Fold Value Proposition & Action Clarity**: Grounded in [Nielsen Norman Group eye-tracking research](https://www.koji.so/docs/eye-tracking-research-guide) and [Mida scroll-attention benchmarks](https://www.mida.so/blog/exit-intent-popup-done-right) (~57% of page-viewing time occurs above the fold; users scan in an F-pattern and read ~20% of body text).
2. **Adjacent Trust, Compatibility & Permission Disclosures**: Grounded in [CXL eye-tracking studies](https://www.mida.so/blog/exit-intent-popup-done-right) (`n=200+`, `p=0.0035`) and [Serbyte conversion research](https://www.serbyte.net/insights/website-conversion-optimization-guide), compatibility (`Web Browser (SaaS Cohort Engine, LTV/CAC & NRR Calculator, R2 Tenant Storage)`), SHA-256 checksums, and permission disclosures are positioned directly adjacent to the primary CTA.
3. **Core Web Vitals Budget**: Zero external render-blocking CSS/fonts and inline SVG diagrams (`GrowthPulse SaaS Cohort Retention Matrix, NRR Waterfall, and Scenario Comparison Table`) keep LCP &le; 2.5s, INP &le; 200ms, and CLS &le; 0.1 per [web.dev Core Web Vitals guidelines](https://www.netguru.com/blog/web-development-best-practices) and [HireDeveloper 2026 web standards](https://hiredeveloper.dev/insights/web-development-best-practices/).
4. **Honest Schema.org & GEO Markup**: Uses `SoftwareApplication` on `/` and `TechArticle` + `FAQPage` on `/guide`. Per [Google Search Essentials](https://blog.gorilla.marketing/seo-glossary/) and [Schema.org GEO guidelines](https://lalancette.org/seo-geo-schema-org-et-deo-en-2026/), `FAQPage` JSON-LD is included for semantic structure and AI answer-engine citation rather than guaranteed Google SERP rich results.
