import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to relax the reader.
// Plain words, slow rhythm, a vast image that keeps growing after the last line.
const TEXT =
  "The sea was here long before your first thought, and it will still be here after your last. Tonight it moves the same slow way it always has, and the dark above it is full of stars you will never count. It is in no hurry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
