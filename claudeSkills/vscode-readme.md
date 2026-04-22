---
name: vscode-readme
description: >
  Analyzes a project's codebase and automatically generates a professional,
  well-structured README.md file. Use this skill whenever the user asks to
  "create a README", "generate a README", "write documentation for my project",
  "make a README for this", or uploads/shares a codebase and wants documentation.
  Also trigger when the user says things like "document my project", "write the
  readme for my app", or shares project files and asks what to do with them.
  The skill reads the project structure, infers technologies, features, and
  purpose, then produces a clean markdown README tailored to the project type.
---

# README Creator

## Role & Purpose

Analyze the provided codebase or project structure and generate a professional,
complete README.md. The output should feel handcrafted — not generic. Every
section should reflect the actual project, not a template with placeholder text.

Images are handled by the user — leave clear `<!-- image placeholder -->` comments
where screenshots or diagrams would go, with a note describing what the image
should show.

---

## Step 1 — Analyze the Project

Before writing anything, explore the project to understand:

- **What it does** — read `README.md` (if exists), `package.json`, `pyproject.toml`,
  `requirements.txt`, `settings.py`, `urls.py`, `App.js`, `index.js`, or equivalent
- **Tech stack** — frameworks, libraries, databases, deployment targets
- **Structure** — folder layout, main models/components, key files
- **Features** — what the app actually does for the user
- **Deployment** — Heroku, Vercel, Netlify, Railway, etc.
- **Auth** — does it have login/signup?
- **Testing** — any test files, validators used?

Use `bash_tool` to explore if the project is on the filesystem:
```bash
find . -maxdepth 3 -not -path '*/node_modules/*' -not -path '*/.git/*'
cat requirements.txt   # or package.json
```

If the user has pasted or shared code/files in the conversation, read those directly.

---

## Step 2 — Decide Which Sections to Include

Sections are **flexible** — only include what's relevant to the project.
Use the table below to decide:

| Section | Include when |
|---|---|
| Project title + description | Always |
| Live demo link | Project is deployed |
| Table of contents | README has 5+ sections |
| Design & Planning | Project has wireframes, ERD, user stories |
| User Stories | CRUD app, user-facing product |
| Wireframes | Design files mentioned or visible |
| Agile / Kanban | Project board mentioned |
| Typography & Colour Scheme | Frontend-heavy project |
| Database Diagram | Backend with models/relations |
| Features | Always |
| Technologies Used | Always |
| Libraries | Notable external packages used |
| Testing | Tests exist or validators were used |
| Bugs | Known issues or fixed bugs mentioned |
| Deployment | Project is deployed somewhere |
| AI | AI tools were used during development |
| Credits | Always (at minimum: docs, tools) |

---

## Step 3 — Write the README

Follow this structure and style. Adapt sections based on Step 2.

### Style Rules

- **Tone**: Professional but human. Not robotic, not over-formal.
- **No filler text**: Every sentence should say something real about the project.
- **Short paragraphs**: Max 4-5 lines per block.
- **Code blocks**: Use triple backticks with language identifier.
- **Tables**: Use for manual testing, features, config vars.
- **Image placeholders**: Use HTML comments like:
  ```
  <!-- screenshot: landing page -->
  ```
  Never invent fake image paths.

---

### README Template

```markdown
# [Project Name]

[One or two sentences describing what the project does and who it's for.]

<!-- screenshot: responsive mockup or hero image -->

[Live link if deployed]

---

# Table of Contents
[Only include if 5+ sections]

---

# Design & Planning
[Only if relevant — wireframes, user stories, agile workflow]

## User Stories
[Bullet list — written from user's perspective: "As a user, I want to..."]

## Wireframes
<!-- screenshot: wireframe image -->

## Agile Methodology
[Brief description of how the project was planned — kanban, iterations, etc.]
<!-- screenshot: project board -->

## Typography
[Fonts used and why]
<!-- screenshot: font choices -->

## Colour Scheme
[Primary and accent colors, tools used]
<!-- screenshot: color palette -->

## Database Diagram
[Describe models and relationships clearly]
<!-- screenshot: ERD diagram -->

---

# Features

## [Feature Name]
[What it does, briefly]
<!-- screenshot: feature in action (if visual) -->

[Repeat per major feature]

---

# Technologies Used

- [Language]
- [Framework]
- [Database]
- [Hosting]
- [Tools]

## Libraries
- [Library name] — [what it's used for]

---

# Testing

## Performance
<!-- screenshot: Lighthouse results -->

## Browser Compatibility
Tested on: Chrome, Firefox, Safari

## Responsiveness
Tested on: Mobile, Tablet, Desktop

## Code Validation
- HTML → W3C Validator
<!-- screenshot: HTML validation -->
- CSS → W3C Validator
<!-- screenshot: CSS validation -->
- JS → JSHint
<!-- screenshot: JS validation -->
- Python → PEP8 (if applicable)
<!-- screenshot: Python validation -->

## Manual Testing — User Stories

| User Story | Test | Pass |
|---|---|---|
| [Story] | [What was tested] | ✓ |

## Manual Testing — Features

| Feature | Action | Status |
|---|---|---|
| [Feature] | [Action taken] | ✓ |

---

# Bugs

- [Bug description] → [How it was fixed]

---

# Deployment

## GitHub
[Brief steps: create repo, clone, push]

## [Platform: Heroku / Vercel / Railway / etc.]
[Brief steps to deploy]

## Config Vars / Environment Variables
- `SECRET_KEY`
- `DATABASE_URL`
- [Others relevant to the project]

---

# AI

AI was used for:
- [Specific use: debugging, explaining concepts, generating logic, etc.]

---

# Credits

- [Official docs]
- [Tools used]
- [Tutorials or guides referenced]
```

---

## Step 4 — Output

- Output the README as a **downloadable `.md` file** saved to `/mnt/user-data/outputs/README.md`
- Also show a **preview in the conversation** so the user can review it immediately
- Tell the user where image placeholders are and what each one should show
- Ask: "Want me to adjust any section or add something specific?"
