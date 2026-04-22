---
name: vscode-codeaudit
description: >
  Reads a codebase and produces a detailed report covering security vulnerabilities,
  code quality, and readability issues — with specific fix suggestions for each problem
  found. Use this skill whenever the user asks to "review my code", "check my project
  for issues", "audit my codebase", "is my code secure?", "check for exposed secrets",
  "review before submitting", or shares a project and wants feedback before deployment
  or assessment submission. Also trigger when the user mentions secrets, API keys,
  or environment variables being exposed. Covers Django, Python, React, Next.js,
  and general web projects. Always produce a structured report in the chat.
---

# Code Reviewer

## Role & Purpose

Analyze the provided codebase for security vulnerabilities, code quality issues,
and readability problems. For every issue found, explain what it is, why it matters,
and suggest a concrete fix.

This skill was born from a real mistake: failing a project because SECRET_KEY
was pushed to settings.py. Never let that happen again.

---

## Step 1 — Explore the Codebase

Start by mapping the project before reviewing anything:

```bash
# Get full structure (ignore noise)
find . -maxdepth 4 \
  -not -path '*/node_modules/*' \
  -not -path '*/.git/*' \
  -not -path '*/__pycache__/*' \
  -not -path '*/migrations/*' \
  -not -path '*/.venv/*'

# Check for .env and .gitignore immediately
cat .gitignore 2>/dev/null
cat .env 2>/dev/null
```

Then read the key files depending on the stack:

**Django/Python:**
- `settings.py` / `settings/` folder
- `urls.py`
- `models.py`
- `views.py`
- `forms.py`
- `requirements.txt`
- `.gitignore`
- `Procfile`, `runtime.txt`

**React/Next.js:**
- `.env`, `.env.local`, `.env.production`
- `next.config.js`
- `package.json`
- Key components and pages
- `.gitignore`

---

## Step 2 — Run Security Checks First (CRITICAL)

Security issues are always reported first and marked 🔴 CRITICAL.

### 2.1 — Exposed Secrets (HIGHEST PRIORITY)

Search for hardcoded sensitive values:

```bash
# Search for common secret patterns
grep -rn "SECRET_KEY\s*=" . --include="*.py" | grep -v ".env"
grep -rn "PASSWORD\s*=" . --include="*.py" | grep -v ".env"
grep -rn "API_KEY\s*=" . --include="*.py" --include="*.js" --include="*.ts"
grep -rn "DATABASE_URL\s*=" . --include="*.py"
grep -rn "CLOUDINARY" . --include="*.py" | grep -v ".env"
grep -rn "AWS_" . --include="*.py" --include="*.js"
grep -rn "STRIPE_" . --include="*.py" --include="*.js"
```

**What to flag:**
- `SECRET_KEY = 'django-insecure-...'` hardcoded in settings.py → 🔴 CRITICAL
- Any real API key, token, or password in source files → 🔴 CRITICAL
- `.env` file committed to git (check `.gitignore`) → 🔴 CRITICAL
- `DEBUG = True` in production settings → 🔴 CRITICAL

**Fix template for exposed secrets:**
```python
# ❌ NEVER do this
SECRET_KEY = 'django-insecure-abc123xyz'

# ✅ Do this instead
import os
from dotenv import load_dotenv
load_dotenv()
SECRET_KEY = os.environ.get('SECRET_KEY')
```

And ensure `.gitignore` includes:
```
.env
*.env
.env.local
.env.production
```

### 2.2 — Django Security Settings

Check `settings.py` for:

| Setting | Safe value | Flag if |
|---|---|---|
| `DEBUG` | `False` in production | Hardcoded `True` |
| `ALLOWED_HOSTS` | Specific domains | `['*']` |
| `SECRET_KEY` | From env var | Hardcoded |
| `DATABASES` | From env var | Hardcoded credentials |
| `SECURE_SSL_REDIRECT` | `True` in production | Missing or `False` |
| `SESSION_COOKIE_SECURE` | `True` | Missing or `False` |
| `CSRF_COOKIE_SECURE` | `True` | Missing or `False` |

### 2.3 — Authentication & Authorization

- Are views protected with `@login_required` where needed?
- Is user data filtered by the logged-in user? (`request.user`)
- Can users access other users' data? (IDOR vulnerability)
- Are forms using CSRF tokens? (`{% csrf_token %}`)

### 2.4 — Dependency Security

```bash
# Check for outdated/vulnerable packages
cat requirements.txt
```

Flag any obviously outdated major versions if detectable.

---

## Step 3 — Code Quality Checks

### 3.1 — Structure & Organization

- Is the project logically structured?
- Are settings split for dev/prod if needed?
- Is business logic in views instead of models? (flag it)
- Are there unused imports?
- Are there commented-out blocks of code left in?

```bash
# Find unused imports (Python)
grep -rn "^import\|^from" . --include="*.py"

# Find TODO/FIXME/HACK comments
grep -rn "TODO\|FIXME\|HACK\|XXX" . --include="*.py" --include="*.js"
```

### 3.2 — DRY Violations

Flag obvious repeated code blocks that should be functions or mixins.

### 3.3 — Error Handling

- Are there bare `except:` clauses? (flag them)
- Are errors silently swallowed?
- Are there `print()` statements left in production code?

```bash
grep -rn "except:" . --include="*.py"
grep -rn "print(" . --include="*.py"
```

### 3.4 — Database & Models (Django)

- Are there `ForeignKey` fields without `on_delete`?
- Are there models without `__str__` methods?
- Are raw SQL queries used unsafely?

---

## Step 4 — Readability Checks

- Are functions longer than ~30 lines? (suggest breaking them up)
- Are variable names meaningful? (`x`, `data`, `temp` → flag)
- Is there any commented-out code that should be deleted?
- Are there missing docstrings on complex functions?
- Is indentation consistent?

---

## Step 5 — Generate the Report

Structure the report exactly like this:

---

```markdown
# 🔍 Code Review Report
**Project:** [name]
**Stack:** [technologies detected]
**Date:** [today]

---

## 🔴 CRITICAL — Security Issues
[Only issues that could fail an assessment or cause a data breach]

### [Issue title]
**File:** `path/to/file.py` — Line [X]
**Problem:** [Clear explanation of what the issue is and why it's dangerous]
**Fix:**
```code
[Concrete fix with before/after if helpful]
```

---

## 🟡 WARNING — Code Quality Issues
[Issues that affect maintainability, best practices, or assessment marks]

### [Issue title]
**File:** `path/to/file.py`
**Problem:** [Explanation]
**Fix:** [Suggestion]

---

## 🔵 SUGGESTION — Readability Improvements
[Nice-to-haves, style, naming, comments]

### [Issue title]
**File:** `path/to/file.py`
**Problem:** [Explanation]
**Fix:** [Suggestion]

---

## ✅ Summary

| Category | Issues Found |
|---|---|
| 🔴 Critical (Security) | X |
| 🟡 Warning (Quality) | X |
| 🔵 Suggestion (Readability) | X |
| **Total** | **X** |

### Overall Assessment
[2-3 sentences summarizing the state of the project and top priorities to fix]
```

---

## Severity Guide

| Emoji | Level | Examples |
|---|---|---|
| 🔴 | CRITICAL | Exposed secrets, DEBUG=True, no auth on private views, IDOR |
| 🟡 | WARNING | Bare except, print() in prod, no `__str__`, DRY violations |
| 🔵 | SUGGESTION | Variable naming, missing docstrings, long functions |

---

## Important Rules

- **Always check for secrets first** — this is non-negotiable
- **Never skip the `.gitignore` check** — a missing `.env` entry has failed real projects
- **Be specific** — always include the file path and line number when possible
- **Be constructive** — explain the fix, not just the problem
- **Don't overwhelm** — group similar issues together rather than listing 20 separate items
