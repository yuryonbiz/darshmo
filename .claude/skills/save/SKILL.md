---
name: save
description: Writes or refreshes HANDOFF.md, a single project status document that lets a brand-new Claude session (or the same session after the chat is cleared/compacted) pick up exactly where things left off, without the user re-explaining anything. Use this proactively whenever the user wants to clear, compact, or start a fresh chat to save tokens, when they say things like "save the project," "save our progress," "let's wrap up," "write a handoff," or "I'm going to close this and come back later," or at the natural end of a solid chunk of work when starting a new session soon is likely. Always suggest running this before a chat gets cleared if meaningful undocumented progress or decisions happened since the last save.
---

# Save: project handoff document

## Why this exists

A long chat accumulates context that never made it into the code or git history: decisions and their reasoning, what's a placeholder versus finished, dead ends already ruled out, things the user asked for that aren't done yet. Clearing the chat throws all of that away. This skill's job is to move that context out of the conversation and into one durable file, `HANDOFF.md`, at the project root, so nothing has to be re-derived or re-explained next time.

`HANDOFF.md` is a single living document. Each run **overwrites it completely** with a fresh, accurate picture, it does not append to a growing log. Treat the previous version as a source of facts to carry forward (a past decision, a rule, a still-open TODO), not as history to preserve verbatim. If something in the old file is now stale (a TODO that's been done, a placeholder that's now real), drop it.

## What to do

1. **Read the existing `HANDOFF.md`** at the project root, if one exists. It's your best source for context that lives only in conversation, not in code: past decisions, standing rules, open questions, things the user explicitly asked to defer. You'll fold whatever is still true into the new version.

2. **Look at the actual project state, don't rely on memory of the conversation alone:**
   - `git log --oneline -20` and `git status` for recent history and anything uncommitted
   - `git diff` (staged and unstaged) if there's pending work worth summarizing
   - Any `CLAUDE.md` or similar rules file, quote/summarize standing rules rather than re-deriving them
   - The real file/folder structure (skip `node_modules`, `.git`, build output, lockfiles) to build an accurate map, don't hand-describe a structure from memory
   - Skim key source files if their purpose isn't obvious from the name alone

3. **Pull from the current conversation** anything not yet visible in the code or git history: decisions made and *why* (the reasoning matters more than the choice itself, since the "why" is what stops someone from re-litigating it), things explicitly deferred or ruled out, unresolved questions, anything the user said to remember.

4. **Write `HANDOFF.md`** at the project root using the structure below. Adapt section content to what's actually true of this project. Skip a section entirely if it's genuinely empty rather than writing "None."

   ```markdown
   # Project Handoff

   _Last updated: <date>_

   ## What this is
   <One or two sentences: what the project is, who it's for.>

   ## Current state
   <What's built and working right now. Be concrete: which pieces are real/finished vs. placeholder/stubbed vs. not started.>

   ## Key decisions
   <Each significant choice made along the way, with the reasoning behind it, not just the outcome. This is the part a fresh session can't get from reading code.>

   ## Project structure
   <A real file/folder map, annotated where it's not self-explanatory. Generate this from the actual filesystem, not from memory.>

   ## Open TODOs / known issues
   <Anything unfinished, deferred, or flagged as a problem. Include enough detail that someone could act on each item without asking "what did you mean by this?">

   ## Useful references
   <Links, external folder paths, service names, anything pointing outside the repo that matters. Never put actual secrets, API keys, or credentials here, this file is meant to be read and often committed.>

   ## How to resume
   Tell Claude: "Read HANDOFF.md and continue." That's the whole handoff.
   ```

5. **Check whether `HANDOFF.md` would get committed to git.** If the repo has a `.gitignore` and the user hasn't indicated otherwise, leave it tracked by default, it's meant to be shared, durable context, not a personal scratch file. Only suggest gitignoring it if the user asks or if it would clearly leak something sensitive.

6. **End your reply with exactly this, nothing else:** "Saved. Run `/clear` now." There's no tool that clears the chat for the user, `/clear` is a command only they can run, so make it a single obvious action instead of a long explanation.

## A note on tone

Write `HANDOFF.md` for a competent reader who has zero memory of this conversation, not for the current user who already knows the backstory. Skip flattery, hedging, or narrating your own process, state facts and decisions plainly. This file's only job is to make a cold start fast.
