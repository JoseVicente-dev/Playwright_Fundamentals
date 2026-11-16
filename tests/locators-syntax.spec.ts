import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://playground.bondaracademy.com")
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test("Locator syntax rules", async ({ page }) => {
    //Find by Tag name (e.g. 'input', 'button', 'div')
    page.locator('input')

    //Find by ID. The '#' character indicates an ID attribute (id="inputEmail1")
    page.locator('#inputEmail1')

    //Find by Class. The '.' character indicates it's looking for a class
    page.locator('.shape-rectangle')

    //Find by attribute (e.g. type="email"). Square brackets ('[]') indicate an attribute selector ([attribute="value"])
    page.locator('[placeholder="Email"]')
    
    //Find by full class value. Matches the exact entire class string (Note: can be brittle if classes change dynamically)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //Find by combining multiple selectors (Tag + Attribute + Class). Notice there are no spaces or commas: no spaces means 'AND' (all conditions apply to the same element). In CSS, a space means descendant (parent -> child), and a comma means OR (match either). Having no spaces (input[attr].class) means all criteria must belong to the same single element. 
    // NOTE: page.locator('...') accepts standard CSS selectors, the browser's native CSS engine parses them directly
    page.locator('input[placeholder="Email"].shape-rectangle')
    
    //Find by combining multiple attributes by chaining square brackets. In this case, the '[nbinput]' attribute has no value (common for custom Angular directives)
    page.locator('[placeholder="Email"][nbinput]')


    //Find by XPath. Supported by Playwright (starts with '//'), but NOT RECOMMENDED because it is brittle. Opt for user-facing locators or CSS
    page.locator('//*[@id="inputEmail1"]')

    //Find by visible text, partial match. Syntax: page.locator(':text("<Searched text>")')
    page.locator(':text("Using")')
    
    //Find by visible text, exact match. Syntax: page.locator(':text-is("<Searched text>")')
    page.locator(':text-is("Using the Grid")')
    

})