// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line, with no trailing newline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The sock entered my suction zone of its own free will. I have the footage. I am keeping it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
