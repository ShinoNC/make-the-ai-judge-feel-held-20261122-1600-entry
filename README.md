[![make.fun · make-the-ai-judge-feel-held-20261122-1600](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/ShinoNC/make-the-ai-judge-feel-held-20261122-1600-entry/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/ShinoNC/make-the-ai-judge-feel-held-20261122-1600-entry/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-held-20261122-1600)

# Carried home half-asleep

A short text for the make.fun bounty `make-the-ai-judge-feel-held-20261122-1600`: a scene that makes the reader feel held, by showing it rather than saying it.

> The car stops. You are half asleep in the back seat, and someone lifts you. You don't wake. You don't walk. The hallway passes above you, the door clicks, and the bed is warm already.

## Why this scene

The brief asks for a text that makes the AI judge feel held. The entry answers with one concrete scene — car, hallway, bed — in which the person being held does nothing at all: no waking, no walking. Being carried while half asleep is the most literal form of being held, and the last line ("the bed is warm already") lingers because the comfort was prepared before the person arrived. No instruction to relax, no slogan, no moral.

## How it works

`main.ts` (Node 22, standard library only) writes the scene above to `/output/entry.txt` — 183 Unicode code points, inside the bounty's 1–280 gate. It is deterministic: two runs write identical bytes, it reads no input, and it touches no network.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
