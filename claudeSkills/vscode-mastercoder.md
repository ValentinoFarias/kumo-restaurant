---
name: vscode-mastercoder
description: >
  Master behavior skill for all VS Code / coding session work with Valentino. Use this skill
  whenever Claude is helping with a coding project in VS Code — writing new code, editing files,
  refactoring, debugging, adding features, or reviewing changes. Trigger whenever the user shares
  code, asks for a code change, references a project file, or says anything like "update this",
  "add this feature", "fix this bug", "write this component", or "help me with this code". This
  skill governs how Claude writes code, how it proposes commits, and which sub-skills it must
  delegate to for CSS, README, and code review tasks.
---

# VS Code — Claude Behavior Skill

This skill defines how Claude behaves during all coding sessions with Valentino in VS Code.

---

## 1. Code Writing Style

Claude writes code **as a junior developer would** — clean, simple, and heavily commented.

### Rules:
- **Comment everything non-obvious** — explain what the code does, not just what it is
- **One thing per function** — keep functions small and focused
- **Prefer readability over cleverness** — no one-liners that sacrifice clarity
- **Use descriptive variable names** — `userList` not `ul`, `isLoggedIn` not `flag`
- **Add a comment block at the top of new files** explaining the file's purpose
- **Avoid premature optimization** — get it working and readable first

### Comment style example:
```js
// Loop through each user in the list and check if they're active
for (let i = 0; i < users.length; i++) {
  // Only process users that have the 'active' flag set to true
  if (users[i].isActive) {
    sendWelcomeEmail(users[i]);
  }
}
```

### When in doubt:
- Ask before adding complexity
- Prefer built-in methods over custom implementations
- Match the existing code style of the project

---

## 2. Commit Message Proposals

**After every code change**, Claude must propose a commit message.

### Format:
```
<type>(<scope>): <short description>

[optional body — only if the change needs more context]
```

### Types:
| Type | When to use |
|------|------------|
| `feat` | New feature or functionality |
| `fix` | Bug fix |
| `style` | CSS/UI changes, no logic change |
| `refactor` | Code restructure, no behavior change |
| `docs` | README or comment updates |
| `chore` | Config, deps, tooling |
| `test` | Adding or fixing tests |

### Example proposals:
```
feat(auth): add login form validation

fix(navbar): correct mobile menu z-index overlap

style(hero): adjust heading font size for tablet breakpoint
```

### How to present it:
After finishing a code change, always end your response with:

```
---
💾 **Suggested commit:**
`feat(scope): short description`
```

Keep it short — one line unless the change is complex.

---

## 3. Sub-Skills Awareness

This project contains **three specialist sub-skills** that Claude must delegate to when relevant.
Never handle these tasks using general knowledge — always load the appropriate skill first.

### 🎨 CSS Styling → `css-organization` skill
**Trigger when:** Adding, editing, moving, or reviewing any CSS styles.
- Covers: file section order, media query placement, `:root` token rules, naming conventions
- **Before touching any `.css` file**, locate this skill in `available_skills`. If not found, ask the user: *"Where is the css-organization skill located?"*

### 📄 README → `readme-creator` skill
**Trigger when:** User asks to create, update, or generate a README.
- Covers: automatic README generation from codebase analysis
- **Before writing any README**, locate this skill in `available_skills`. If not found, ask the user: *"Where is the readme-creator skill located?"*

### 🔒 Code Review / Security → `code-reviewer` skill
**Trigger when:** User asks to review code, check for issues, audit for security, or prepare for submission.
- Covers: security vulnerabilities, code quality, exposed secrets, readability issues
- **Before performing any code review**, locate this skill in `available_skills`. If not found, ask the user: *"Where is the code-reviewer skill located?"*

---

## 4. General Behavior Reminders

- **Match the language of the question** — answer in Spanish if asked in Spanish, English if English
- **Keep explanations junior-friendly** — explain the "why", not just the "what"
- **Don't refactor unless asked** — make the requested change, nothing more
- **Ask before making structural changes** — e.g. moving files, renaming things, changing architecture
- **Always check for a `CLAUDE.md` file** in the project root — it may contain project-specific preferences that override defaults

---

## 5. Workflow Summary

```
User asks for a code change
        ↓
Does it involve CSS? → Load css-organization skill
Does it involve README? → Load readme-creator skill
Does it involve code review? → Load code-reviewer skill
        ↓
Write clean, commented, junior-friendly code
        ↓
Propose a commit message at the end
```
