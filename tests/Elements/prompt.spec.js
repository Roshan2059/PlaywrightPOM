import { test, expect } from "@playwright/test";
import { makeid } from "../../helpers/commonHelper";

test("Handle a prompt dialog", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  const randomString = await makeid(6);
  // await page.pause();
   page.on("dialog", async (dialog) => {
    console.log(dialog.message()); // "I am a JS prompt"
    await dialog.accept(randomString); // Enter random 10 character string into the prompt
  });

  console.log("abc", randomString);
  await page.click('button[onclick="jsPrompt()"]');
  
  await page.waitForTimeout(5000);

  await expect(page.locator("#result")).toHaveText(`You entered: ${randomString}`);
  const resultText = await (page.locator("#result")).textContent();

  if (resultText === `You entered: ${randomString}`) {
    console.log("Prompt test passed");
  } else {
    console.log("Prompt test failed");
  }
});
