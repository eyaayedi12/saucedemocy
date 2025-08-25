/// <reference types="cypress" />

import MenuPage from "../../pages/menu.pages.js";
import loginPage from "../../pages/login.page.js";

describe("logout feauture",()=>{

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.dologin("standard_user","secret_sauce")
    })
    it("logout ",{tags:['@smoke', '@logout']},()=>{
        MenuPage.cliquersurleMenuButton()
        MenuPage.cliquersurlelogOutButton()
        cy.get(".login_logo").should("be.visible")
    })

})