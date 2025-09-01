import { test, expect } from "@playwright/test";

test("Handle a prompt dialog", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

//   await page.pause();
   page.on("dialog", async (dialog) => {
    console.log(dialog.message()); // "I am a JS prompt"
    await dialog.accept("Roshan"); // Enter "Roshan" into the prompt
  });

  
  await page.click('button[onclick="jsPrompt()"]');

  await page.waitForTimeout(5000);
  
  if (await expect(page.locator("#result")).toHaveText("You entered: Roshan")) {
      console.log("Prompt test passed");
  } else {
      console.log("Prompt test failed");
  }
});
