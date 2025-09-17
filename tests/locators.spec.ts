import {test , expect} from '@playwright/test';

test.describe('login test', ()=>{  

test ('valid login' , async ({page}) => {
    test.setTimeout(120000);
    await page.goto('https://practice.expandtesting.com/login');
    //1- id
    await page.locator ("[id='username']").fill ('practice');
    //getbylabel
    await page.getByLabel ("Password").fill ('SuperSecretPassword!');
    //2- xpath
    //await page.locator ("//button[normalize-space()='Login']").click();
    //getbyrole
    await page.getByRole ("button", {name: 'Login'}).click();
    //3- css selector 
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");

})

test ('invalid login' , async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    //css selector
    await page.locator ("#username").fill ('practice');
    //4- name
    await page.locator ("[name='password']").fill ('SuperSecretPassword');
    await page.locator ("//button[normalize-space()='Login']").click();
    await expect(page.locator("div[id='flash'] b")).toContainText("Your password is invalid!");

})

test('login page' , async ({page}) => {
    test.setTimeout(120000);
    await page.goto('https://practice.expandtesting.com/login');
    //5- Alt text
    //await expect(page.locator("[alt='Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.']")).toBeVisible();
    await expect(page.getByAltText("Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman")).toBeVisible();
    //6- text
    //await expect(page.getByText("SuperSecretPassword!")).toBeVisible();


})

test.only('search' , async ({page}) => {
    test.setTimeout(120000);
    await page.goto('https://practice.expandtesting.com');
    //getbyplaceholder
    await page.getByPlaceholder("Search an example...").fill('login');
    await page.locator("//a[normalize-space()='Test Login Page']").click()
    await page.pause();
    await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
    


})


});

