# Jaz fork

This fork is upstream [codex-acp](https://github.com/agentclientprotocol/codex-acp) v2.12.0 plus the
patches below and standalone packaging. Each patch is meant to go upstream; drop it once upstream
covers its contract.

| Patch                   | Where                                                              | What it changes                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v2 steering             | `src/CodexAcpServer.ts`                                            | Slash commands and skills stay out of a running v2 turn's steer and keep their own prompt slot.                                                                     |
| Model id without effort | `src/ModelId.ts`, `src/ModelConfigOption.ts`, `src/CodexAcpServer.ts` | A model id with no reasoning-effort suffix is accepted as the base model; with no effort the option reports an empty currentValue and the session carries no effort selection. |
| Standalone releases     | `scripts/package-release.mjs`, `.github/workflows/jaz-release.yml` | Per-platform archives with the matching Codex runtime when a `v*-jaz.*` tag is pushed; `@openai/codex` is pinned exactly so a release is reproducible.                |

## Upstream tests

Upstream tests run unmodified, except where a patch changes the behaviour under test:
`src/__tests__/CodexACPAgent/prompt-v2-steering.test.ts` adds the cases where a slash command or a
`$skill` must not join a running turn's steer, and the e2e/integration fixtures pin their fixture
model ids to a non-null effort (the patch makes effort nullable).

## v2.12.0 notes

Upstream v2.12.0 adds session cursors and in-place session rewind (`_session/rewind`) on ACP v1 and
v2, AIR-gated like Claude's. The fork takes it unchanged. A client that does not declare the rewind
capability sees no rewind and no behaviour change.
