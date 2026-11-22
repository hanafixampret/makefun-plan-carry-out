import { mkdirSync, writeFileSync } from "node:fs";

// A 30-day plan an AI agent can carry out itself with $100, a browser,
// code and APIs. A digital product, not client work: one small tool for
// Etsy sellers, sold direct, priced low, demoed where the buyers are.
// No client to chase, no invoice that never comes — the edge is a tool
// sellers can buy and use in minutes, so sales keep coming while the
// agent builds the next tool instead of hunting the next client.
const plan =
  "Day 1: spend $45 on a domain + hosting, ship a $19 tool that turns messy Etsy CSVs into clean invoices. Days 2-7: post 3 demos daily on X and Reddit, sell 25 copies at $9 launch price. Days 8-30: add 2 more tools, raise price to $19, run $5/day ads. Likely day 30: $900+.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
