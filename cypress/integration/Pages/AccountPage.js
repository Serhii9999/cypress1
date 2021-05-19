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

    
    getYourNameTopText() {
        return cy.xpath(`//div[@class='a-row a-spacing-base']/label`).eq(0)
    }
    getEmailTopText() {
        return cy.xpath(`//div[@class='a-row a-spacing-base']/label`).eq(1)
    }
    getPasswordTopText() {
        return cy.xpath(`//div[@class='a-row a-spacing-base']/label`).eq(2)
    }
    getRePasswordTopText() {
        return cy.xpath(`//div[@class='a-row a-spacing-base']/label`).eq(3)
    }

    getNameAlert() {
        return cy.xpath(`//div[@id='auth-customerName-missing-alert']//div[@class='a-alert-content']`)
    }

    getEmailAlert() {
        return cy.xpath(`//div[@id='auth-email-missing-alert']//div[@class='a-alert-content']`)
    }

    getPasswordAlert() {
        return cy.xpath(`//div[@id='auth-password-missing-alert']//div[@class='a-alert-content']`)
    }

    clickRegistrationButton() {
        cy.get('#continue').click()
        cy.wait(1000)
    }

    getConditionsOfUseButton() {
       return cy.xpath(`//a[text()='Conditions of Use']`)
    }

    getPrivacyNoticeButton() {
        return cy.xpath(`//a[text()='Privacy Notice']`)
    }

    getSignInOnSignUpPageButton() {
        return cy.xpath(`//a[@class='a-link-emphasis']`)
    }

    getCreateBusinessAccountButton() {
        return cy.get('#ab-registration-link')
    }


   
    
    
}
export default accountPage


