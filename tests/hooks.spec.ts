import { test } from '@playwright/test';
/**
 * In order to avoid repeating steps, we can use Hooks
 * The methods include
 *  - beforeAll()
 *  - beforeEach()
 *  - afterEach()
 *  - afterAll()
 * 
 * [Suite / File Start]
   │
   ▼
    test.beforeAll()       ──> (Runs once)
   │
   ├──▶ test.beforeEach()  ──> Fresh browser context & page created
   │    test('Test 1')
   │    test.afterEach()   ──> Page destroyed
   │
   ├──▶ test.beforeEach()  ──> Brand-new browser context & page created
   │    test('Test 2')
   │    test.afterEach()   ──> Page destroyed
   │
   ▼
    test.afterAll()        ──> (Runs once)
[Suite / File End]
*/

//This steps run before each test in both suites
test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com")

})

test.describe('This suite A', () => {
    //This steps run before each test in suite A
    test.beforeEach('Hooks steps before each test', async ({ page }) => {
        await page.getByText('Forms').click()
    }
    )
    test('This is the name of the 1st test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    }
    )

    test('This is the name of the 2nd test', async ({ page }) => {
        await page.getByText('Datepicker').click()
    }
    )
})

test.describe('This suite B', () => {
    //This steps run before each test in suite B
    test.beforeEach('Hooks steps before each test', async ({ page }) => {
        //The 'exact' option match the text exactly
        await page.getByTitle('Charts', {exact:true}).click();
    }
    )

    test('This is the name of the 2nd test', async ({ page }) => {
        await page.getByText('Echarts').click()
    }
    )

})