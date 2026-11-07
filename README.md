# WorksAi GrowthPulse (`worksai-growthpulse`)

> Cookie-free, GDPR-friendly web and funnel analytics SaaS with automated conversion drop-off diagnostics.

- **Live Subdomain Application:** [https://growthpulse.worksai.org](https://growthpulse.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-growthpulse](https://worksai.org/apps/worksai-growthpulse)
- **Category:** B. SaaS products
- **License:** MIT (Derived from [Umami](https://github.com/umami-software/umami) @ `559e3c6`)

## Capability Matrix
- **What You Can Do:** Evaluate multi-step conversion funnels (landing -> pricing -> signup) using cookieless daily-salted session hashes and identify largest stage drop-off bottlenecks.
- **Deterministic Domain Utilities:** evaluateFunnelAndAnomalies (cookieless salted session hashing, stage conversion math, and daily event aggregation).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) conversion bottleneck diagnosis and A/B hypothesis generation.
- **Persisted R2/Neon Features:** Cookieless funnel telemetry summaries and anomaly snapshots persisted in Cloudflare R2 (workspaces/worksai-growthpulse/*) and Neon Postgres.
- **Known Limitations:** Processes batch/webhook event streams; client-side script tag tracking requires adding the GrowthPulse beacon snippet to target sites.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```
