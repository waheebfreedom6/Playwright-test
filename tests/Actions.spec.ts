import {test , expect} from '@playwright/test';

test.describe('login test', ()=>{  
test.only ('valid login' , async ({page}) => {
    test.setTimeout(200000);
    //1- goto
    await page.goto('https://practice.expandtesting.com');
    await page.goto('https://practice.expandtesting.com/login');
    //2- reload
    await page.reload();
    //3- goback
    await page.pause();
    await page.goBack();
    // //4- forword
    await page.pause();
    await page.goForward();
    await page.locator ("[id='username']").fill ('practice');
    await page.getByLabel ("Password").fill ('SuperSecretPassword!');
    await page.getByRole ("button", {name: 'Login'}).click();
    await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");

})


test('search' , async ({page}) => {
    test.setTimeout(120000);
    await page.goto('https://practice.expandtesting.com');
    await page.getByPlaceholder("Search an example...").fill('login');
    await page.locator("//a[normalize-space()='Test Login Page']").click()
    await page.pause();
    await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
    


})


});

