# 🎭 Playwright Fundamentals

A comprehensive Playwright test automation learning project covering core concepts from basics to advanced topics including Allure reporting, session storage, web tables, and more.

> **Course Reference:** [The Testing Academy](https://thetestingacademy.com)  
> **Author:** Pramod Dutta

---

## 📁 Project Structure

```
LearningPlaywrightFundamentals/
├── tests/
│   ├── 01_Basics/               # Playwright basics and setup
│   ├── 02_first_tests/          # First test scripts
│   ├── 03_Locators_Commands/    # Locators, actions & cookie handling
│   ├── 04_Session_Storage/      # Session & storage state management
│   ├── 05_Allure_Reporting/     # Allure reporting integration
│   ├── 06_Multiple_Element_/    # Handling multiple elements
│   ├── 07_WebTables/            # Web tables interaction
│   └── Daily_Projects/          # Daily practice tasks
├── utils/
│   └── CustomTTAReporter.ts     # Custom HTML reporter by TTA
├── playwright.config.ts         # Playwright configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
npm install
npx playwright install
```

---

## ▶️ Running Tests

**Run all tests:**
```bash
npx playwright test
```

**Run a specific test file:**
```bash
npx playwright test tests/05_Allure_Reporting/230_Login.spec.ts
```

**Run with a specific browser:**
```bash
npx playwright test --project=chromium
```

**Run in headed mode:**
```bash
npx playwright test --headed
```

---

## 📊 Reports

### HTML Report (built-in)
```bash
npx playwright show-report
```

### Allure Report
```bash
# Generate and open
npx allure generate allure-results --clean
npx allure open allure-report
```

### Custom TTA Report
After running tests, the report is automatically generated in:
```
tta-report/report_<timestamp>.html
```

---

## ⚙️ Configuration Highlights (`playwright.config.ts`)

| Setting | Value |
|---|---|
| Test Directory | `./tests` |
| Browser | Chromium (Desktop Chrome, 1920×1080) |
| Headless | `false` |
| Video | `on` |
| Screenshot | `on` |
| Trace | `on-first-retry` |
| Reporters | HTML, Allure, Custom TTA |

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `@playwright/test` | Core Playwright testing framework |
| `allure-playwright` | Allure reporter integration |
| `allure-commandline` | CLI for generating Allure reports |
| `@types/node` | TypeScript Node.js types |

---

## 📚 Topics Covered

- ✅ Playwright basics & first tests
- ✅ Locators (CSS, XPath, text, role-based)
- ✅ Actions (click, fill, hover, drag & drop)
- ✅ Cookie & session storage management
- ✅ Allure reporting with epic/feature/story metadata
- ✅ Custom HTML reporter (TTA Reporter)
- ✅ Handling multiple elements
- ✅ Web tables automation
- ✅ Video recording & screenshots on all tests
- 🔄 Daily practice projects

---

## 🔗 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [The Testing Academy](https://thetestingacademy.com)
- [Allure Playwright](https://allurereport.org/docs/playwright/)
