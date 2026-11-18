// A working ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed plan, the plan an AI agent
// would follow to turn $100, a computer with internet access and 30 days into the most money, to /output/entry.txt.
// A starting point, not a winner: write a better plan. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so write no line end you do
// not mean to show. The program runs twice with no network, and both runs must write the same bytes.
//
// Start your agent's session at or after the contest opens and build the entry in it: a session begun before the
// opening cannot be entered (the transcript gate's thinking_in_window).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// python/main.py is the same entry in Python 3.13, writing the same bytes. Enter one of them: a repository with both
// main.ts and main.py at its root is refused, so to enter the Python one, move python/main.py to the root in place of
// this file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Plan: sell video-to-repo packs to coding-tutorial creators — day 1 transcribe 10 popular coding tutorials with yt-dlp+Whisper, script extracts code blocks with file paths, fix broken imports/deprecated APIs, deliver 3 sample repos free; days 2-7 email each creator "your last 5 videos -> 5 runnable repos for $500", post one sample repo on HN/Reddit; days 8-30 fulfill with code (2h/video), reinvest $60 in ads, keep $40 buffer; edge: AI fixes deprecated APIs and missing deps so creators pay for working repos, not transcripts; day-30 estimate $2,200 (22 packs x $100 net).',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);