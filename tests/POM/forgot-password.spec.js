import { expect, test } from "@playwright/test";
import { LoginPage } from "../../pages/login-page";

test("Forgot Password Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode");
    await expect(page.locator('text=Reset Password')).toBeVisible();

    if (page.url() === "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode" && await page.locator('text=Reset Password').isVisible()) {
        console.log("Reset Password page is visible");
    }else {
        console.log("Reset Password page is not visible");
    }
    
    await page.fill('input[name="username"]', 'testuser');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset");
    await expect(page.locator('text=Reset Password link sent successfully')).toBeVisible();

    if (page.url() === "https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset" && await page.locator('text=Reset Password link sent successfully').isVisible()) {
        console.log("Forgot Password test passed");
    }else {
        console.log("Forgot Password test failed");
    }
});