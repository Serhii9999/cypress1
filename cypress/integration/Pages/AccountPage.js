import * as _ from 'lodash';
class accountPage{
    enterEmailField(value) {
        cy.get('#ap_email').type(value)
        cy.wait(2000)
    }
    enterPasswordField(value) {
        cy.get('#ap_password').type(value)
        cy.wait(2000)
    }


    clickContinueButton() {
        cy.get('#continue').click()
        cy.wait(2000)
    }

    clickSignInButton() {
        cy.get('#signInSubmit').click()
        cy.wait(2000)
    }

    hoverOnAccountButton() {
        cy.get('#nav-link-accountList').trigger('mouseover')
        cy.wait(2000)
    
    }

    clickonSignOutButton() {
        cy.get('#nav-item-signout').click()
    }

    getTopTextOfYourAmazonPage(){
        return cy.get('div[class="np-grid-title"]')
        
    }

   
    
    
}
export default accountPage


