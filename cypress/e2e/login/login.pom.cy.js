/// <reference types="cypress" />

import loginPage from "../../pages/login.page.js";

describe("login feature test with pom", () => {

beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
})

it("login with valid credentials",{tags:['@smoke', '@login']}, () => {
    //let loginPage = new loginPage();
    loginPage.saisirusername("standard_user")
    loginPage.saisirpassword("secret_sauce")
    loginPage.cliquerloginbutton()
    cy.url().should("eq","https://www.saucedemo.com/inventory.html")
})

it("login with invalid username et vaalid password ",{tags:'@smoke'}, () => {
    //let loginPage = new loginPage();
    loginPage.saisirusername("invalid_username")
    loginPage.saisirpassword("secret_sauce")
    loginPage.cliquerloginbutton()
    loginPage.elements.errorMessage().should("be.visible")
})

it("login with valid credentials",{tags:'@smoke'}, () => {
    //let loginPage = new loginPage();
    loginPage.saisirusername("standard_user")
    loginPage.saisirpassword("invalid_user")
    loginPage.cliquerloginbutton()
     loginPage.elements.errorMessage().should("be.visible")
})





})