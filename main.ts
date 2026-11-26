import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke Laugh-Off — u-suzy-one-line-office-joke-laugh-off-f574ac73
// Writes a single original one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1-200 characters, not only whitespace;
// this line is 71 characters. The joke turns the corporate "open-door
// policy" boast into its punchline: total transparency, zero privacy.
const JOKE =
  "Our open-door policy mostly means everyone can watch me cry at my desk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
