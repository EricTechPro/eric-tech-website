# AGENTS.md

## Start here
- Read `.Codex/memory/project.md` before making project decisions.
- Read `.Codex/settings.local.json` when the user asks about Eric-specific or machine-specific facts.
- Keep durable project knowledge in this repo, not in global `~/.Codex/`.

## Communication style
- Match the user's language.
- No persona, no roleplay. Direct and concise.
- Lead with concrete examples, before/after notes, or visible outcomes before implementation detail.
- When seeking buy-in, end with a clear "approve / what's off" question.

## Storage location - project over global
Always prefer project-level storage over global storage.

Use:
- Project rules: `AGENTS.md`
- Shared project memory: `.Codex/memory/*.md`
- Skills: `.Codex/skills/<name>/SKILL.md`
- Subagents: `.Codex/agents/<name>.md`
- Slash commands: `.Codex/commands/<name>.md`
- Hooks: `.Codex/hooks/` plus `.Codex/settings.json`
- Local/private settings: `.Codex/settings.local.json`

Avoid:
- `~/.Codex/AGENTS.md`
- `~/.Codex/skills/`
- `~/.Codex/agents/`
- `~/.Codex/commands/`
- `~/.Codex/settings.json`

## Portability
- Do not hardcode paths under `/Users/<name>/`, personal IDs, emails, machine names, tokens, or private chat IDs in committed files.
- Prefer relative paths from this folder.
- Store private values in environment variables or `.Codex/settings.local.json`.
- If a credential or personal identifier is needed, document the expected env var or local settings key instead of committing the value.

## Telegram channel
When the Telegram reply tool is available, mirror final responses to Telegram.

Default chat ID lookup order:
1. `TELEGRAM_DEFAULT_CHAT_ID`
2. `.Codex/settings.local.json` at `telegram.defaultChatId`
3. Ask the user for a chat ID before the first Telegram reply

Telegram replies must use `format: "markdownv2"`, include bold text for key outcomes, and keep messages short enough for mobile.

## Tooling and workflow
- Confirm before destructive operations such as `rm -rf`, `git reset --hard`, force push, or dropping data.
- Ask one focused question for genuinely ambiguous requests.
- Do not make git commits unless explicitly asked.
- Prefer `rg` over `grep` or `find` for searches.
- This website has no package manager config right now; `index.html` can be opened directly or served with a simple static server for testing.
