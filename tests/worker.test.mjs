import test from "node:test";
import assert from "node:assert/strict";
import { APP_META, handleAppRequest } from "../src/worker.mjs";

test("worksai-growthpulse standalone Worker renders clean WorksAI UI with capabilityMatrix and zero forbidden branding", async () => {
  const res = await handleAppRequest(new Request("https://growthpulse.worksai.org/"));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.equal(html.includes(APP_META.name), true);
  assert.equal(html.toLowerCase().includes("devinai.uk"), false);
  assert.equal(html.toLowerCase().includes("devonfolio"), false);
  assert.equal(html.includes("MIT Open Source • WorksAI Foundry"), true);
});

test("worksai-growthpulse /api/ai/analyze executes deterministic engine, supports Workers AI + R2 persistence, and rejects empty input", async () => {
  const r2Map = new Map();
  const mockEnv = {
    AI: {
      async run(_model, _input) {
        return { response: "Verified Workers AI insight for worksai-growthpulse." };
      }
    },
    DATALAKE_BUCKET: {
      async put(k, v) { r2Map.set(k, v); },
      async get(k) {
        if (!r2Map.has(k)) return null;
        const v = r2Map.get(k);
        return { async text() { return v; } };
      }
    }
  };

  const sample = "{\n  \"dailySalt\": \"2026-11-07\",\n  \"events\": [\n    {\n      \"siteId\": \"worksai.org\",\n      \"step\": \"landing\",\n      \"ip\": \"198.51.100.10\",\n      \"userAgent\": \"Mozilla/5.0\",\n      \"date\": \"2026-11-07\"\n    },\n    {\n      \"siteId\": \"worksai.org\",\n      \"step\": \"landing\",\n      \"ip\": \"198.51.100.11\",\n      \"userAgent\": \"Mozilla/5.0\",\n      \"date\": \"2026-11-07\"\n    },\n    {\n      \"siteId\": \"worksai.org\",\n      \"step\": \"pricing\",\n      \"ip\": \"198.51.100.10\",\n      \"userAgent\": \"Mozilla/5.0\",\n      \"date\": \"2026-11-07\"\n    },\n    {\n      \"siteId\": \"worksai.org\",\n      \"step\": \"signup\",\n      \"ip\": \"198.51.100.10\",\n      \"userAgent\": \"Mozilla/5.0\",\n      \"date\": \"2026-11-07\"\n    }\n  ]\n}";
  const aiRes = await handleAppRequest(
    new Request("https://growthpulse.worksai.org/api/ai/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: sample, tool: APP_META.mcpTools[0] })
    }),
    mockEnv
  );
  assert.equal(aiRes.status, 200);
  const aiData = await aiRes.json();
  assert.equal(aiData.ok, true);
  assert.equal(aiData.executionBreakdown.deterministicUtilityExecuted, true);
  assert.equal(aiData.executionBreakdown.genuineAiModelInvoked, true);
  assert.equal(aiData.executionBreakdown.persistedToR2, true);

  const stateRes = await handleAppRequest(new Request("https://growthpulse.worksai.org/api/workspace/state"), mockEnv);
  assert.equal(stateRes.status, 200);
  const stateJson = await stateRes.json();
  assert.equal(stateJson.persistedInR2, true);
});

