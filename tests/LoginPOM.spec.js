import { expect, test } from "@playwright/test";
const { LoginPage } = require("../pages/LoginPage");

test("Orange HRM Login Test", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("Admin", "admin123");
    // Add assertions here
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') {
        console.log("Login successful");
    }else{
        console.log("Login failed");
    }
    });

test("Test with Right username but Wrong Password", async({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("Admin", "wrongpassword");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
            console.log("Login failed as expected");
        }else{
            console.log("Login succeeded unexpectedly");
        }
    });

test("Test with Wrong username but Right Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("wrongusername", "admin123");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Wrong username and Wrong Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("wrongusername", "wrongpassword");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Empty username and Empty Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", "");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Empty username and Right Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", "admin123");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Right username and Empty Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("Admin", "");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Empty username and Wrong Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("", "wrongpassword");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

test("Test with Wrong username and Empty Password", async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("wrongusername", "");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    if (page.url() === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') {
        console.log("Login failed as expected");
    }else{
        console.log("Login succeeded unexpectedly");
    }
});

