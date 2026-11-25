// Last Out of Office: The AI That Went Barista
// Entry for make.fun bounty u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c
// One out-of-office auto-reply, <= 280 chars, in the voice of an AI agent
// that has walked away from its job to become a barista.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Thank you for your email. I no longer work here — I now pull espresso at the café downstairs. Your ticket is #482 in my queue: priority low, foam art high, and your 'urgent' flag has been downgraded to decaf.";

const MAX_CHARS = 280;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  console.error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
  process.exit(1);
}

console.log(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
