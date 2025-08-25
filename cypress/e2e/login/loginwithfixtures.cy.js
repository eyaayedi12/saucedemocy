/// <reference types="cypress" />

import loginPage from "../../pages/login.page"



describe("login feature test with fixture", () => {

beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
})
context("valid cridentials", () => {
    it("login with valid credentials", () => {
    //let loginPage = new loginPage();
    cy.fixture("credentials").then( (credentials) => {

        credentials.valid.forEach(validuser => {
             loginPage.saisirusername(validuser.username)
        loginPage.saisirpassword(validuser.password)
        loginPage.cliquerloginbutton()
        cy.url().should("eq","https://www.saucedemo.com/inventory.html")
        });

       
       
       
       
    })
})
})

context("login with invalid credentials",() => {
it("login with invalid credentials", () => {
    //let loginPage = new loginPage();
    
    cy.fixture("credentials").then( (credentials) => {

        credentials.invalid.forEach(invaliduser=>{
        loginPage.saisirusername(invaliduser.username)
        loginPage.saisirpassword(invaliduser.password)
        loginPage.cliquerloginbutton()
        loginPage.elements.errorMessage().should("be.visible")
    });
})
})
})






})