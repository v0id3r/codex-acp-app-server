# Jaz fork

This fork is upstream [codex-acp](https://github.com/agentclientprotocol/codex-acp) v2.11.0 plus the
patches below and standalone packaging. Each patch is meant to go upstream; drop it once upstream
covers its contract.

| Patch                   | What it changes                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| v2 steering             | Slash commands and skills stay out of a running v2 turn's steer and keep their own prompt slot.                                                                    |
| Model id without effort | A model id with no reasoning-effort suffix is accepted as the base model.                                                                                          |
| Standalone releases     | `scripts/package-release.mjs` and `.github/workflows/jaz-release.yml` build per-platform archives with the matching Codex runtime when a `v*-jaz.*` tag is pushed. |
