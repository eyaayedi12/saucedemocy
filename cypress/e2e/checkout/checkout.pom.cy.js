import loginPage from "../../pages/login.page.js";
import ProductsPage from "../../pages/products.pages.js";
import cartPage from "../../pages/cart.page.js";
import checkoutPage from "../../pages/checkout.page.js";



describe('Checkout test', () => {
  beforeEach(() => {
     cy.visit("https://www.saucedemo.com/")
               loginPage.saisirusername("standard_user")
               loginPage.saisirpassword("secret_sauce")
               loginPage.cliquerloginbutton()
  });

  it('verifier  le checkout feature ',{tags:['@regression', '@checkout']}, () => {
    ProductsPage.selectRandomProduct().then((product) => {
      ProductsPage.recupererNomProduit(product).then((nomProduit) => {
        const nomFormate = nomProduit.toLowerCase().replace(/\s+/g, '-');
        ProductsPage.ajouterProduitAuPanier(nomFormate);
        ProductsPage.allerAuPanier();
    checkoutPage.startCheckout('Eya', 'Testeuse', '92230');
    checkoutPage.verifyCheckoutComplete();
  });
});
});
});