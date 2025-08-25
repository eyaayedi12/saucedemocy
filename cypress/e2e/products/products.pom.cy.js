

/// <reference types="cypress" />


import loginPage from "../../pages/login.page.js";
import ProductsPage from "../../pages/products.pages.js";

describe('Test  Produits', () => {
  beforeEach(() => {
     cy.visit("https://www.saucedemo.com/")
           loginPage.saisirusername("standard_user")
           loginPage.saisirpassword("secret_sauce")
           loginPage.cliquerloginbutton()
  });

  it('Vérifie que les produits sont affichés', () => {
    ProductsPage.elements.productTitle().should('have.length.greaterThan', 0);
  });

  it('Vérifie que les produits sont triés par nom de A a Z ', () => {
    ProductsPage.selectionnerTriPar('az');
    ProductsPage.elements.productTitle().then(($products) => {
      const names = $products.toArray().map(el => el.innerText);
      const sorted = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).to.deep.equal(sorted);
    });
  });

  it('Vérifie que les produits sont triés par prix croissant', () => {
    ProductsPage.selectionnerTriPar('lohi');
    ProductsPage.elements.productPrice().then(($prices) => {
      const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')));
      const sorted = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sorted);
    });
  });

  it('Ajoute un produit au panier', () => {
    ProductsPage.selectRandomProduct().then((product) => {
      ProductsPage.recupererNomProduit(product).then((nom) => {
        const nomFormate = nom.toLowerCase().replace(/\s+/g, '-');
        ProductsPage.ajouterProduitAuPanier(nomFormate);
        ProductsPage.verifierProduitAjoute();
      });
    });
  });

  it('Ajoute puis supprime un produit du panier', () => {
    ProductsPage.selectRandomProduct().then((product) => {
      ProductsPage.recupererNomProduit(product).then((nom) => {
        const nomFormate = nom.toLowerCase().replace(/\s+/g, '-');
        ProductsPage.ajouterProduitAuPanier(nomFormate);
        ProductsPage.verifierProduitAjoute();

        ProductsPage.retirerProduitDuPanier(nomFormate);
        ProductsPage.verifierProduitSupprime();
      });
    });
  });
});