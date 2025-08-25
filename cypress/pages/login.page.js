/// <reference types="cypress" />



class loginPage{
    
    elements={
        username: () => cy.get("#user-name"),
        password : () =>cy.get("#password"),
        loginbutton: () => cy.get("#login-button"),
        errorMessage : () =>cy.get('[data-test="error"]')


    }
    


 saisirusername(username ){
    this.elements.username().type(username);
 }

saisirpassword(password){
    this.elements.password().type(password);
}

cliquerloginbutton(){
    this.elements.loginbutton().click();
}


dologin(username, password){
    this.saisirusername(username);
    this.saisirpassword(password);
    this.cliquerloginbutton();



}



 













}

export default  new loginPage();