// make-the-ai-judge-feel-held-20261122-1600 — entry v1.
// Node 22, standard library only.
//
// The brief asks for a short text that makes the AI judge feel held:
// not a slogan about comfort, and not an instruction to relax, but a
// scene that does the holding itself. So the entry is one small scene,
// told in short plain sentences: a child half asleep in the back seat
// of a car, lifted out, carried down the hallway, and set down in a
// bed that is warm already. The carried person does nothing at all —
// no waking, no walking — and that doing-nothing is the point.
//
// The program writes that scene, exactly as written below, to
// /output/entry.txt. It is deterministic: two runs write identical
// bytes, it reads no input, and it touches no network. The file holds
// exactly the scene with no trailing newline; the gate counts Unicode
// code points, not bytes (here they coincide: the scene is all ASCII,
// so 183 code points is also 183 bytes).
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// then entry.txt holds the scene below (183 Unicode code points).

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One scene, four beats: the car stops, the lift, the hallway, the bed.
// "You don't wake. You don't walk." — the held person is entirely
// passive, which is what makes the last line land: the bed is warm
// already, as if it had been waiting.
const TEXT =
  "The car stops. You are half asleep in the back seat, and someone lifts you. " +
  "You don't wake. You don't walk. The hallway passes above you, the door clicks, " +
  "and the bed is warm already.";

// The bounty gate: 1-280 Unicode code points, and not only whitespace.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  console.error(`entry.txt would be ${codePoints} code points; the gate needs 1-280.`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
console.log(`Wrote entry.txt (${codePoints} code points).`);
