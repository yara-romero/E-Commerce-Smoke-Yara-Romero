# E-Commerce-Smoke-Yara-Romero

Smoke Test Automation Framework for an E-Commerce platform using Playwright and TypeScript.

## 🧰 Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions

## 📁 Project Structure

E-Commerce-Smoke-Yara-Romero/
│── pages/
│── tests/
│── test-data/
│── playwright.config.ts
│── package.json
│── README.md

## 🌐 Test Environment

| Parameter | Value |
|-----------|-------|
| Application URL | https://www.saucedemo.com/ |
| Username | standard_user |
| Password | secret_sauce |

## ⚙️ Installation

**Clone the repository**:
git clone https://github.com/your-username/E-Commerce-Smoke-Yara-Romero.git
cd E-Commerce-Smoke-Yara-Romero

**Install dependencies**:
npm install

**Install Playwright browsers**:
npx playwright install

## ▶️ Running Tests

**Run all tests**:
npx playwright test

**Run only smoke tests**:
npx playwright test --grep @smoke

**Run a specific test**:
npx playwright test tests/login.spec.ts

**Run tests in headed mode**:
npx playwright test --headed

**Run tests in debug mode**:
npx playwright test --debug

**Run tests in a specific browser**:
npx playwright test --project=Chromium

## 📊 Test Reports

**View the HTML report**:
npx playwright show-report

**After execution, reports are generated in**:
playwright-report/
test-results/

## 🧪 Smoke Test Coverage
✅ Login
✅ Add Product to Cart

## 🔄 CI/CD
GitHub Actions will run automated tests on every push and pull request.

## 👩‍💻 Author
Yara Romero