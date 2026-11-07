# WorksAi GrowthPulse (`worksai-04`)

> Cookie-free, GDPR-friendly web and funnel analytics SaaS with automated conversion drop-off diagnostics.

**Category:** B. SaaS products  
**License:** MIT (Derivative of [Umami](https://github.com/umami-software/umami) @ `559e3c6`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-growthpulse/`

## Value Proposition & Scope
Replaces Google Analytics 4 complexity and Plausible's no-free-tier AGPLv3 pricing with an MIT-licensed, multi-tenant analytics platform featuring privacy-hashed visitor sessions, funnel drop-off detection, and MCP query tools.

### What Works Out-of-the-Box (Zero External Credentials Required)
Full event ingestion, privacy session hashing, funnel analysis, anomaly detection, and local SQLite/JSON persistence.

### What Requires User Configuration (`.env.example`)
`DATABASE_URL` (Neon Postgres) for multi-region cloud persistence; optional `OPENAI_API_KEY` for narrative executive emails.

## Measurable Acceptance Criteria
- AC-01: Ingests pageviews and custom events without storing raw IP addresses or setting client cookies (uses daily-salted SHA-256 session hashes).
- AC-02: Computes multi-step funnel conversion rates and identifies the highest drop-off step accurately.
- AC-03: Detects statistically significant traffic/conversion anomalies across daily time-series buckets.
- AC-04: Enforces tenant `siteId` isolation and rate limits abusive event flood payloads.

## Known Limitations
- High-volume deployments (>50M monthly events) should pair PostgreSQL with ClickHouse to avoid table bloat.
- Session replay heatmaps are excluded from the default privacy-first collector to preserve zero-cookie compliance.

## Quick Start & Verification
```bash
npm test
```
