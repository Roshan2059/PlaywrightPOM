import { expect, test } from "@playwright/test";

test("Alerts Test", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.click("button[onclick='jsAlert()']");
    page.on("dialog", async (dialog) => {
        expect(dialog.message()).toBe("I am a JS Alert");
        await dialog.accept();
        // await dialog.dismiss();
    });
    
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");

    // if (await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")) {
    //     console.log("Alert test passed");
    // } else {
    //     console.log("Alert test failed");
    // }
});