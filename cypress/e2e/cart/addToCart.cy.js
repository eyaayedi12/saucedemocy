/// <reference types="cypress" />


import loginPage from "../../pages/login.page.js";
import ProductsPage from "../../pages/products.pages.js";
import cartPage from "../../pages/cart.page.js";


describe(' Ajouter des produits', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    loginPage.saisirusername('standard_user');
    loginPage.saisirpassword('secret_sauce');
    loginPage.cliquerloginbutton();

    cy.url().should('include', '/inventory.html');
  });

  it('Ajoute un produit au panier et vérifie sa présence dans le panier',{tags:['@regression', '@addcart']} ,() => {
    ProductsPage.selectRandomProduct().then((product) => {
      ProductsPage.recupererNomProduit(product).then((nomProduit) => {
        const nomFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
        ProductsPage.ajouterProduitAuPanier(nomFormate);
        ProductsPage.allerAuPanier();
        cy.get('.inventory_item_name').should('contain', nomProduit);
      });
    });
  });
});
