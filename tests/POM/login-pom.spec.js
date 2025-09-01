import { expect, test } from "@playwright/test";
import { checkDashboardLink,performLogin, checkLoginLink } from "../../helpers/commonHelper";
const { LoginPage } = require("../../pages/login-page");

test("Orange HRM Login Test", async({page}) => {
    await performLogin(page, "Admin", "admin123", true);
    });

test("Test with Right username but Wrong Password", async({page}) => {
        await performLogin(page, "Admin", "wrongpassword", false);
    });

test("Test with Wrong username but Right Password", async({page}) => {
    await performLogin(page, "wrongusername", "admin123", false);
});

test("Test with Wrong username and Wrong Password", async({page}) => {
    await performLogin(page, "wrongusername", "wrongpassword", false);
});

test("Test with Empty username and Empty Password", async({page}) => {
    await performLogin(page, "", "", false);
});

test("Test with Empty username and Right Password", async({page}) => {
    await performLogin(page, "", "admin123", false);
});

test("Test with Right username and Empty Password", async({page}) => {
    await performLogin(page, "Admin", "", false);
});

test("Test with Empty username and Wrong Password", async({page}) => {
    await performLogin(page, "", "wrongpassword", false);
});

test("Test with Wrong username and Empty Password", async({page}) => {
    await performLogin(page, "wrongusername", "", false);
});