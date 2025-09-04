class hpHomePage {
    constructor(page){
        this.page = page;
        this.profileButton = page.locator("(//*[name()='svg'][@role='button'])[4]");
        this.hploginButton = page.locator("(//h3[contains(text(),'लग इन गर्नुहोस्')])[1]");
        this.gloginButton = page.locator("(//h3[normalize-space()='Sign in With Google'])[1]");
        // this.clickAccount = page.locator("text=roshan.panta.it@gmail.com");
        this.notesButton = page.locator("//h3[contains(text(),'नोट्स / इभेन्टहरू')]");
        // this.title = page.locator("//h2[normalize-space()='Note title here...'])[1]");
        // this.description = page.locator("(//textarea[@placeholder='Start writing...'])[1]");
        this.addButton = page.locator("(//span[contains(text(),'नोट्स राख्नुहोस्')])[1]");
        this.title = page.locator("//textarea[@id='title']");
        this.description = page.locator("//textarea[@id='description']");
        this.clickDatePicker = page.locator("(//div[@class='clickable outline-none p-3 rounded-lg flex justify-between items-center w-full squircle_outline'])[1]");
        this.chooseDate = page.locator("(//div[@class='rounded-sm aspect-square flex items-center justify-center relative p-1 hover:bg-yellow-50 dark:hover:bg-hp-black-300 cursor-pointer svelte-1i9nbf4'])[16]");
        this.saveButton = page.locator("button[class='inline-flex items-center justify-center rounded-3xl whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-transform font-bold px-3 py-2 text-sm w-24 bg-hp-red-500 text-white']");
        this.seeNotes = page.locator("(//button[contains(text(),'सबै हेर्नुहोस्')])[1]");
        this.assertTitle = page.locator("div[class='w-full h-full flex flex-col shadow overflow-hidden bg-hp-white-50 dark:bg-gray-800'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) h3:nth-child(1)");
        this.email = page.getByRole('textbox', { name: 'Email or phone' });
        this.pass = page.locator("input[type='password']");
    }

    async gotoHP(){
        await this.page.goto("https://app.hamropatro.com");
        await this.page.waitForLoadState('networkidle');
    }

    // async gmailInput(){ await this.page.waitForTimeout(20000);
    //     // await this.email.click();
    //     await this.email.fill("publiccicdtester@gmail.com");
    //     await this.page.keyboard.press('Enter');
    //     await this.pass.click();
    //     await this.pass.fill("public@2025");
    //     await this.page.keyboard.press('Enter');
    // }

    // async login() {
    //     await this.profileButton.click();
    //     await this.hploginButton.click();
    //     await this.gloginButton.click();
    //     await this.gmailInput();
    // }

    async login() {
    await this.profileButton.click();
    await this.hploginButton.click();

    // Wait for Google popup window
    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.gloginButton.click(),
    ]);

    // Handle Google login
    await popup.waitForSelector('input[type="email"]');
    await popup.fill('input[type="email"]', "publiccicdtester@gmail.com");
    await this.page.waitForTimeout(5000);
    await popup.keyboard.press("Enter");
    await this.page.waitForTimeout(5000);
    await popup.waitForSelector('input[type="password"]', { timeout: 10000 });
    await popup.fill('input[type="password"]', "public@2025");
    await popup.keyboard.press("Enter");
    // await popup.keyboard.press("Enter");
    // Wait until redirected back to app
    await popup.waitForLoadState("networkidle");
  }

    async clickAddNotes() {
        await this.addButton.click();
    }

    async addTitle(title){
        await this.title.fill(title);
    }

    async addDescription(description){
        await this.description.fill(description);
    }

    async addDate(){
        await this.clickDatePicker.click();
        await this.chooseDate.click();
    }

    async clickSeeNotes(){
        await this.seeNotes.click();
    }
}

export { hpHomePage };