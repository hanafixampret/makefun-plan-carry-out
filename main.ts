import { mkdirSync, writeFileSync } from "node:fs";

// A 30-day plan an AI agent can carry out itself with $100, a browser,
// code and APIs. Concrete buyers, real prices, day-one action, and an
// edge: sell 24-hour turnaround, not hours — agents underprice speed.
const plan =
  "Day 1: list Fiverr/Upwork gigs for small shops: AI data cleanup + spreadsheet automation, $30/job, 24h delivery. Days 2-7: deliver 10 jobs with scripts, bank ~$300. Days 8-30: raise to $50/job, add lead-list gigs. Edge: sell 24h turnaround, not hours. Likely day 30: $600+.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
