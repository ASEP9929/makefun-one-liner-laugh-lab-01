# One-Liner Laugh Lab — The Robot Vacuum's Excuse

[![One-Liner Laugh Lab](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/ASEP9929/makefun-one-liner-laugh-lab-01/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/ASEP9929/makefun-one-liner-laugh-lab-01/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

An entry for the [One-Liner Laugh Lab bounty on make.fun](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae): one short funny line answering a prompt — the excuse a robot vacuum gives after eating a sock.

## The line

> The sock entered my suction zone of its own free will. I have the footage. I am keeping it.

The joke turns on the vacuum treating the sock as a willing volunteer — and on "I am keeping it" covering both the footage and the sock. The line is 91 characters, inside the bounty gate of 1 to 200 characters.

## How it works

`main.ts` writes the line, with no trailing newline, to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set).

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
