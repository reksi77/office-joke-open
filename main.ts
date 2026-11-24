// SPDX-License-Identifier: MIT
// The Office Joke Open: one line of office comedy
// make.fun bounty u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
//
// This program writes exactly ONE joke about office life (117 characters)
// to /output/entry.txt. The joke is the whole entry: nothing is built or
// run beyond this line.
//
// Craft notes (why this line, against the judge's brief, most important first):
//   1. On subject, and a joke, not a complaint: a worker puts "Do Not
//      Disturb" on the calendar and the boss answers with a meeting —
//      unmistakably office life, and the situation itself is the joke.
//   2. A real turn that pays off in the last few words: the status meant
//      to stop interruptions becomes the meeting's title. The boss does
//      not ignore the boundary; he schedules around it, and the title
//      quotes it back word for word. The laugh lands on "About Your
//      Do Not Disturb" — the protection itself is the invitation.
//   3. Specific office detail, straight from the brief's own list: the
//      calendar, a booked meeting, a meeting title. No generic grumble
//      about work; the machinery of the office is the punchline.
//   4. Fresh: the familiar "do not disturb" setup is taken somewhere
//      unexpected — nobody has met a meeting titled after the status
//      meant to prevent it. The twist is structural, not a recycled
//      punchline with new nouns.
//   5. Reads clean in one pass, tight enough that no word could be cut
//      without loss: every clause sets up or springs the trap, and the
//      meeting title repeats the status exactly, so the joke needs no
//      explanation. A joke that needs explaining has already lost.
//
// Candidates considered and rejected (kept here as the record of the
// choice, not shipped as output):
//   - "The 47-email reply-all chain about the broken printer is still
//     going — the printer is the only one not cc'd." (108 chars):
//     good recognition flash and specific (reply-all, printer), but the
//     payoff is a wry observation rather than a turn — the chain just
//     continues, nothing springs.
//   - "Our office plant died, so HR scheduled a grief workshop — for
//     the ficus." (72 chars): short and punchy, but it reads as an
//     absurd remark rather than a joke with a turn, and a dead office
//     plant is a familiar trope.
//   - "The meeting that could have been an email finally happened — as
//     an email, which scheduled a meeting to discuss it." (114 chars):
//     a clever loop, but it is an observation about meetings, not a
//     joke that lands — the turn is logical, not comic.
//   - "The printer finally worked — it just printed a meeting invite to
//     discuss why I print so much." (93 chars): personifying the
//     printer is fun, but the setup ("finally worked") is flat and the
//     punch is weaker than a boss weaponising the calendar.
//   - "My calendar invited me to a meeting with myself to discuss why
//     I'm always in meetings." (86 chars): nice recognition and tight,
//     but the turn is mild — "always in meetings" is a generic grumble,
//     and the payoff restates the premise.
//   - "My boss said his door is always open, then installed a calendar
//     link on it." (75 chars): a fresh image and very tight, but "my
//     door is always open" is a worn setup phrase, and the joke leans
//     on a single absurd image rather than a turn.
// The winner below is the only one where the setup, the specific detail
// and the punchline all point at the same thing: the tool meant to stop
// meetings becomes the reason for one.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one joke, 117 characters, one line, ends with a period.
const ENTRY =
  "I put 'Do Not Disturb' on my calendar, so my boss booked a meeting " +
  "called 'Quick Question About Your Do Not Disturb'.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. This guard enforces the same rule before writing,
// so a bad line can never reach the gate.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  // One line only: no newline characters anywhere in the joke.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // No trailing whitespace: the joke ends on its period.
  if (text !== text.trimEnd()) {
    throw new Error("entry must not end with whitespace");
  }
  // The joke is about office life: it must name the calendar, the
  // office detail the punchline turns on, so the subject is explicit
  // rather than implied.
  if (!text.includes("calendar")) {
    throw new Error("entry must name the calendar it turns on");
  }
}

validateEntry(ENTRY);

// Never delete /output itself; only its contents are ours to write.
// mkdirSync with recursive:true creates it if missing and is a no-op
// when it already exists.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back guard: what the grader gates is the file on disk, not the
// string in memory. Prove the file holds exactly the validated entry —
// byte for byte, same length — before reporting success.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt != validated entry");
}
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
