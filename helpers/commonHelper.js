const { expect } = require("@playwright/test");
const { LoginPage } = require("../pages/login-page");

async function checkDashboardLink(page) {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // await page.waitForLoadState('domcontentloaded');
    // await expect(page.getByText("Dashboard")).toBeVisible();
}

async function checkLoginLink(page) {
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await expect(page.getByText("Login")).toBeVisible();
}

async function performLogin(page, username, password, directedToDashboard = true) {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(username, password);

    if (directedToDashboard) {
        await checkDashboardLink(page);
        console.log("Login successful");
    } else {
        await checkLoginLink(page);
        console.log("Login failed as expected");
    }
}

async function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("result", result);
    return result;
}

// console.log(makeid(5));

module.exports = {
    checkDashboardLink,
    checkLoginLink, performLogin, makeid
};