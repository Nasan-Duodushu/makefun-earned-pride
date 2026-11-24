// One Line of Earned Pride: one line giving the judge a quiet, earned
// moment of pride for someone in a concrete scene.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "At 61, having never touched a computer, Mrs. Alvarez typed her first email to her grandson — one finger, twenty minutes — and signed it 'Sent from my new laptop, with love, Abuela.'";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
