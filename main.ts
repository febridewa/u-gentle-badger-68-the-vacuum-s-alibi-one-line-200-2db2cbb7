// The Vacuum's Alibi: One Line, 200 Characters
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// Writes one original funny line to /output/entry.txt: a robot vacuum's
// deadpan excuse for missing a spot. The joke turns on an unexpected,
// specific detail — the bumper's sensor report reclassifies the dirt as
// architecture — and the punch lands on the last words: the machine is
// not insured for structural work. Deterministic: the same fixed string
// on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My bumper classified that spot as load-bearing. I am not insured for structural work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
