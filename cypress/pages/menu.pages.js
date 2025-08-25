/// <reference types="cypress" />



class MenuPage{
  
    elements={
        menuButton:() =>cy.get("#react-burger-menu-btn"),
        logOutButton:()=>cy.get("#logout_sidebar_link"),
        allItem:()=>cy.get("#inventory_sidebar_link")
    };

    cliquersurleMenuButton(){
        this.elements.menuButton().click();
    }

    cliquersurlelogOutButton(){
        this.elements.logOutButton().click(); 
   }

   cliquersurAllItemButton(){
    this.elements.allItem().click();
   }
}
export default new MenuPage