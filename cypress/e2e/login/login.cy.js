/// <reference types="cypress" />

describe("Login", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("Login avec username correct et pass correct", ()=>{

    cy.get("#user-name").clear().type("standard_user")
    cy.get("#password").clear().type("secret_sauce")
    cy.get("#login-button").click()
    cy.url().should('eq',"https://www.saucedemo.com/inventory.html")
    })


    it("Login avec username Incorrect et pass correct", ()=>{

    cy.get("#user-name").clear().type("Incorrect_username")
    cy.get("#password").clear().type("secret_sauce")
    cy.get("#login-button").click()
    cy.get('[data-test="error"]').should("be.visible")
    .and("have.text","Epic sadface: Username and password do not match any user in this service")

    })

    it("Login avec username correct et pass Incorrect", ()=>{

    cy.get("#user-name").clear().type("standard_user")
    cy.get("#password").clear().type("Incorrect")
    cy.get("#login-button").click()
    cy.get('[data-test="error"]').should("be.visible")
    .and("have.text","Epic sadface: Username and password do not match any user in this service")

    })

})