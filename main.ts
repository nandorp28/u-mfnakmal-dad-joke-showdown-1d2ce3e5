// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// Node 22 stdlib only. Validates: a single line, 1-200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My son asked why the computer went to therapy. I said it had too many unresolved issues.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (JOKE.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
