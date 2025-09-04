// import { test as setup, expect } from '@playwright/test';
// import path from 'path';
// import { hpHomePage } from '../pages/hp-loginpage';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// setup('authenticate', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//    const hpPage = new hpHomePage(page);  
//    await hpPage.gotoHP();
//     // await page.pause();
//     await hpPage.login();
//     // End of authentication steps.
//   // Wait until the page receives the cookies.
//   await page.waitForURL('https://app.hamropatro.com');
//   await page.context().storageState({ path: authFile });
//   console.log('✅ Authentication state saved to:', authFile);
// });

import path from 'path';
import { chromium } from '@playwright/test';
import { hpHomePage } from '../pages/hp-loginpage';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const hpPage = new hpHomePage(page);
  await hpPage.gotoHP();
  await page.pause();
  await hpPage.login();

  // Save logged-in state
  await context.storageState({ path: authFile });
  console.log('✅ Logged in and storageState saved!');
  await browser.close();
}

export default globalSetup;


// import { test as setup } from '@playwright/test';
// import path from 'path';
// import { hpHomePage } from '../pages/hp-loginpage';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// setup('authenticate', async ({ page }) => {
//   const hpPage = new hpHomePage(page);

//   // Go to Hamro Patro home page
//   await hpPage.gotoHP();

//   // Click login buttons to open Google login popup
//   const [popup] = await Promise.all([
//     page.waitForEvent('popup'),       // wait for popup to appear
//     hpPage.profileButton.click(),
//     hpPage.hploginButton.click(),
//     hpPage.gloginButton.click(),
//   ]);

//   // Wait for email input, fill it, and submit
//   await popup.waitForSelector('input[type="email"]', { timeout: 15000 });
//   await popup.fill('input[type="email"]', 'publiccicdtester@gmail.com');
//   await popup.keyboard.press('Enter');

//   // Wait for password input, fill it, and submit
//   await popup.waitForSelector('input[type="password"]', { timeout: 15000 });
//   await popup.fill('input[type="password"]', 'public@2025');
//   await popup.keyboard.press('Enter');

//   // Wait until redirected back to main app
//   await page.waitForURL('https://app.hamropatro.com', { timeout: 20000 });

//   // Save storage state to reuse login in other tests
//   await page.context().storageState({ path: authFile });

//   console.log('✅ Auth completed and user.json saved.');
// });
