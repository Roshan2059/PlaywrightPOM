import {test, expect} from '@playwright/test';
import { hpHomePage } from '../../pages/hp-loginpage';
import { assert } from 'console';

test('Add Notes test', async ({page}) => {
    const hpPage = new hpHomePage(page);
    await hpPage.gotoHP();
    await page.pause();
    await hpPage.login();
    await hpPage.clickAddNotes();
    await hpPage.addTitle("Test Note");
    await hpPage.addDescription("This is a test note.");
    await hpPage.addDate();
    await hpPage.saveButton.click();
    await hpPage.gotoHP();
    await hpPage.notesButton.click();
    await hpPage.clickSeeNotes();

    await expect(hpPage.assertTitle).toContainText("Test Note");

    if(await hpPage.assertTitle == "Test Note"){
        console.log("Note added successfully");
    }else{
        console.log("Note not added");
    }
});

