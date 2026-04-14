# E-Commerce-Smoke-Yara-Romero

Smoke Test Automation Framework for an E-Commerce platform using Playwright and TypeScript.

## 🧰 Tech Stack
- Playwright
- TypeScript
- Node.js
- GitHub Actions

## 📁 Project Structure
```plaintext
E-Commerce-Smoke-Yara-Romero/
│
├── fixtures/                 # Custom Playwright fixtures
│   └── baseTest.ts
│
├── pages/                    # Page Object Model classes
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── CheckoutOverviewPage.ts
│
├── test-data/                # Test data in JSON format
│   ├── credentials.json
│   └── checkoutData.json
│
├── tests/                    # Test specifications
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── utils/                    # Reusable utilities
│   └── auth.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

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
Test Case	Description	Status
Login	Verify successful login with valid credentials	✅
Add to Cart	Verify a product can be added to the cart	✅
Checkout	Verify a user can complete a purchase	✅

## 📂 Test Data
Located in the `test-data` folder:
- `credentials.json`
- `checkoutData.json`

## 🔄 CI/CD
GitHub Actions will run automated tests on every push and pull request.

## 👩‍💻 Author
Yara Romero