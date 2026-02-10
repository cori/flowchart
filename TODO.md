# FPV Training Tracker - Todo List

> Semaphore for agent task coordination. Update status as work progresses.

## Active Tasks

| ID | Task | Status | Agent | Issue | Priority | Notes |
|----|------|--------|-------|-------|----------|-------|
| T001 | Create todo list for issues | ✅ Complete | - | #4 | P1 | This file |
| T002 | Verify AGENTS.md accuracy | ⚪ Pending | - | #9 | P1 | Execute all commands, verify completeness |
| T003 | Fix log session dialog | 🔴 Blocked | - | #8 | P2 | Core feature broken |
| T004 | Fix trick selection dropdown | 🔴 Blocked | - | #7 | P2 | Core feature broken |
| T005 | Enhance trick database | ⚪ Pending | - | #3 | P3 | Add ~20 tricks from PDF across 5 levels |
| T006 | Allow freetext in dropdowns | ⚪ Pending | - | #6 | P3 | Workaround for CRUD ops |
| T007 | CRUD operations for dropdowns | ⚪ Pending | - | #5 | P4 | Nice-to-have for maintenance |
| T008 | Offline-first support | ⚪ Pending | - | #2 | P4 | Queue writes when offline |

## New Features from PDF (Not Yet Tracked)

| ID | Task | Status | Agent | Priority | Notes |
|----|------|--------|-------|----------|-------|
| T009 | Phase/Gate tracking system | ⚪ Pending | - | P2 | 4 phases with go/no-go checkpoints |
| T010 | Weekly review system | ⚪ Pending | - | P2 | Trick mastery %, session logs, weekly reviews |
| T011 | Crash taxonomy categorization | ⚪ Pending | - | P3 | orient/throttle/timing/spatial/propwash/etc. |
| T012 | Drill library with mastery targets | ⚪ Pending | - | P3 | Specific drills with success criteria |
| T013 | Equipment status inventory | ⚪ Pending | - | P3 | Props/frames/batteries tracking |
| T014 | Session template enhancement | ⚪ Pending | - | P2 | Pack-level logging (voltage, focus, crashes) |

## Status Legend

- ⚪ Pending - Not started, ready to be claimed
- 🟡 In Progress - Being worked on
- ✅ Complete - Finished and verified
- 🔴 Blocked - Cannot proceed, needs unblocking

## Priority Definitions

- **P1** - Critical for agent coordination / blocks other work
- **P2** - Core feature broken or high-value enhancement
- **P3** - Important but not blocking
- **P4** - Nice-to-have, future work

## Agent Instructions

1. **Claim a task**: Update the "Agent" column with your session/agent identifier
2. **Start work**: Change status to 🟡 In Progress
3. **Complete work**: Change status to ✅ Complete, close associated issue if applicable
4. **Blockers**: If blocked, change status to 🔴 Blocked and note why in Notes column
5. **New tasks**: Add new rows as needed, assign appropriate priority

## Notes

- All P0/P1 issues should be claimed by only ONE agent at a time
- Lower priority tasks (P3/P4) can be worked in parallel by multiple agents
- Update this file atomically to avoid merge conflicts
- Link to GitHub issues using `#<issue-number>` format
