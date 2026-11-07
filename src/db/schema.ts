export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-growthpulse",
  subdomain: "growthpulse.worksai.org",
  mcpEndpoint: "https://growthpulse.worksai.org/api/mcp",
  aiEndpoint: "https://growthpulse.worksai.org/api/ai/analyze",
  mcpTools: ["growthpulse.diagnose_funnel", "growthpulse.compute_attribution", "growthpulse.audit_cwv"]
} as const;
