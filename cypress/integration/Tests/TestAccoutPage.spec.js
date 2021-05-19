import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import accountPage from '../Pages/accountPage';


describe('Tests for sign up', function(){
    const mp = new mainPage()
    const ap = new accountPage()

    beforeEach(() => {
        cy.visit('')
        ap.hoverOnAccountButton()
        mp.clickRegistrationButton()
       


    })

    it('Test other buttons for existence', function(){
        expect(ap.getConditionsOfUseButton()).to.exist
        expect(ap.getPrivacyNoticeButton()).to.exist
        expect(ap.getSignInOnSignUpPageButton()).to.exist
        expect(ap.getCreateBusinessAccountButton()).to.exist



    })
    it('Test click on sign up when fields are empty', function(){
        ap.clickRegistrationButton()
        ap.getNameAlert().should(($div) => {
            
            expect($div.get(0).innerText).to.contain('Enter your name')
            
      
})
        ap.getEmailAlert().should(($div) => {
            
        expect($div.get(0).innerText).to.contain('Enter your email')
    

})
        ap.getPasswordAlert().should(($div) => {
            
        expect($div.get(0).innerText).to.contain('Enter your password')
    

})
        
      
        
    })

    
    it('Test click on sign up button', function(){
       
        
        cy.get('h1').should(($div) => {
            
            expect($div.get(0).innerText).to.contain('Create account')
        
})
})


    it('Test registration page for correct text under fields', function(){
        ap.getYourNameTopText().should(($div) => {
            
            expect($div.get(0).innerText).to.contain('Your name')
            
      
})

        ap.getEmailTopText().should(($div) => {
            
             expect($div.get(0).innerText).to.contain('Email')
    

})

        ap.getPasswordTopText().should(($div) => {
            
              expect($div.get(0).innerText).to.contain('Password')
    

})

        ap.getRePasswordTopText().should(($div) => {
            
             expect($div.get(0).innerText).to.contain('Re-enter password')
    

})

})
})


describe('Tests with sign in', function(){
    const mp = new mainPage()
    const ap = new accountPage()

    beforeEach(() => {
        cy.visit('')
        
        const email = 'serhii.maletych@gmail.com'
        const password = '1234567mal'
        
        mp.clickSignInButton()
        ap.enterEmailField(email)
        ap.clickContinueButton()
        ap.enterPasswordField(password)
        ap.clickSignInButton()
      })

      
    it('Test "your amazon" page availability', function(){

        
        mp.clickMainPageBytton()
        mp.clickYourAmazonButton()
       cy.wait(1000)
        ap.getTopTextOfYourAmazonPage().should(($div) => {
            expect($div.get(0).innerText).to.contain('More to Explore')
        
    })
})
    it('Test correct user name', function(){
      
        const name = 'Serhii'
        cy.get('#nav-link-accountList').should(($div) => {
            expect($div.get(0).innerText).to.contain(name)
        

    })
    })

    it('Test sign out', function(){
      
        mp.clickSignInButton()
        ap.hoverOnAccountButton()
        ap.clickonSignOutButton()

    })
    
    it('Test sign in ', function(){
        
        mp.clickSignInButton()
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Your Account')
          })

    })
  

    })




  

