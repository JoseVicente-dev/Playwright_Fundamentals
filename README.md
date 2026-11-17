# Playwright Fundamentals

End-to-end testing suite and comprehensive study companion for Playwright test automation and JavaScript fundamentals, based on the **"Playwright from Zero to Hero"** course.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running Tests](#running-tests)
- [Debugging & Tooling](#debugging--tooling)
- [Study Guides & References](#study-guides--references)
- [Useful Commands Cheatsheet](#useful-commands-cheatsheet)

---

## 🎯 Overview

This repository contains hands-on code, test suites, and in-depth documentation covering:

- **JavaScript Fundamentals**: Modern ES6+ syntax, scope, closures, callbacks, promises, and modular file imports (`JavaScript_lessons/`).
- **Core Playwright Concepts**: Browser, Context, and Page isolation model.
- **Locators & Selectors**: Best-practice user-facing locators (`getByRole`, `getByText`, `getByLabel`), filtering, chaining, and strict mode.
- **Actions & Auto-Waiting**: Actionability checks, clicks, typing (`fill` vs `pressSequentially`), and navigations.
- **Web-First Assertions**: Auto-retrying assertions (`expect(locator).toBeVisible()`, etc.).
- **Test Structure & Hooks**: `beforeAll`, `beforeEach`, `afterEach`, `afterAll`, tags, and annotations.

---

## 📂 Repository Structure

```text
├── html_basics/                  # Basic HTML templates for local testing
│   └── index.html
├── JavaScript_lessons/           # JavaScript foundation exercises
│   ├── helpers/                  # Helper utilities and printing functions
│   ├── lessons/                  # Lessons 1 to 10 (variables, functions, classes, etc.)
│   └── JS_STUDY_GUIDE.md         # Comprehensive JavaScript reference guide
├── tests/                        # Playwright test specs
│   ├── example.spec.ts           # Getting started example test
│   ├── first-test.spec.ts        # First Playwright test implementation
│   ├── hooks.spec.ts             # Lifecycle hooks and test scoping
│   └── locators-syntax.spec.ts   # Modern Playwright locator strategies
├── playwright.config.ts          # Playwright test runner configuration
├── PLAYWRIGHT_STUDY_GUIDE.md     # In-depth Playwright reference manual (1000+ lines)
└── package.json                  # Dependencies and execution scripts
```

---

## ⚙️ Prerequisites

- **[Node.js](https://nodejs.org/)** (v18 or higher recommended)
- **npm** (bundled with Node.js)

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JoseVicente-dev/Playwright_Fundamentals.git
   cd Playwright_Fundamentals
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Install required browser binaries (Chromium, Firefox, WebKit):**
   ```bash
   npx playwright install
   ```

---

## 🧪 Running Tests

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all tests headlessly across configured browsers |
| `npx playwright test --headed` | Run tests with browser windows visible |
| `npx playwright test tests/locators-syntax.spec.ts` | Run a specific test file |
| `npx playwright test --project=chromium` | Run tests only on Chromium / Google Chrome |
| `npx playwright test -g "locator syntax"` | Run tests matching a specific title |

---

## 🛠️ Debugging & Tooling

Playwright comes with powerful developer tools built-in:

### 1. Interactive UI Mode (Recommended)
Explore tests interactively with time-travel debugging, watch mode, and visual locator picking:
```bash
npx playwright test --ui
```

### 2. Playwright Inspector & Step-by-Step Debugging
Step through test execution line by line:
```bash
npx playwright test --debug
```
Or insert `await page.pause()` directly inside any test.

### 3. Test Generator (Codegen)
Record user actions in a browser to generate Playwright test code automatically:
```bash
npx playwright codegen https://example.com
```

### 4. HTML Test Reports & Traces
View the detailed HTML report of the latest test run:
```bash
npx playwright show-report
```
To view an exported `.zip` trace file:
```bash
npx playwright show-trace path/to/trace.zip
```

---

## 📚 Study Guides & References

Detailed revision notes and architectural guides are available directly in this repo:

- **[Playwright Study Guide](./PLAYWRIGHT_STUDY_GUIDE.md)**: Comprehensive deep dive covering setup, fixtures, lifecycle hooks, modern locators, auto-waiting mechanics, assertions, debugging workflows, and `playwright.config.ts`.
- **[JavaScript Study Guide](./JavaScript_lessons/JS_STUDY_GUIDE.md)**: Reference guide covering variables, scope, TDZ, data types, equality, loops, functions, and ES6 module exports/imports.

---

## 📜 Useful Commands Cheatsheet

```bash
# Run tests in UI mode
npm run test:ui

# Run tests in headed mode
npm run test:headed

# Open HTML test report
npm run test:report

# Run specific lesson in JavaScript
node JavaScript_lessons/lessons/lesson1.js
```
