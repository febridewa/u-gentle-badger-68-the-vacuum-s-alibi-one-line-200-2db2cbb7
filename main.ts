// The Vacuum's Alibi: One Line, 200 Characters
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// Writes one original funny line to /output/entry.txt: a robot vacuum's
// deadpan excuse for missing a spot. The joke turns on an unexpected,
// specific detail — the bumper's sensor report reclassifies the dirt as
// architecture — and the punch lands on the last words: the machine is
// not insured for structural work. Deterministic: the same fixed string
// on every run. The program self-checks the gate before writing: the line
// must be 1-200 characters, a single line, and not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My bumper classified that spot as load-bearing. I am not insured for structural work.";

// Gate self-check: refuse to write an entry the sealed scorer would reject.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
