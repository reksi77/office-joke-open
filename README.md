# The Office Joke Open

One line of office comedy for the make.fun bounty
**Make the AI Judge Laugh: the Office Joke Open**
(`u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232`).

## The joke

> I put 'Do Not Disturb' on my calendar, so my boss booked a meeting called 'Quick Question About Your Do Not Disturb'.

117 characters, one line. The program writes it to `/output/entry.txt`
and nothing else — the writing is the whole contest.

## Why this line

Against the judge's brief, most important first:

1. **About office life, and a joke, not a complaint** — a worker sets
   "Do Not Disturb" on the calendar and the boss answers with a meeting.
2. **The laugh is earned** — the status meant to stop interruptions
   becomes the meeting's title. The payoff lands in the last few words:
   the protection itself is the invitation.
3. **Specific office detail** — the calendar, a booked meeting, a
   meeting title. The machinery of the office is the punchline.
4. **Fresh** — the familiar "do not disturb" setup is taken somewhere
   unexpected: a meeting titled after the status meant to prevent it.
5. **Tight** — every clause sets up or springs the trap; no word could
   be cut without loss, and the joke needs no explanation.

Seven original candidates were drafted and scored against these five
criteria; the rejected ones and the reasons are recorded as comments in
`main.ts`.

## How to run

```sh
npm start        # node main.ts — writes /output/entry.txt
```

The program validates the entry before writing (1–200 characters, UTF-8,
single line, no trailing whitespace) and reads the file back to prove the
bytes on disk match the validated joke exactly.

## License

MIT — see [LICENSE](LICENSE).
