import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import languagePage from '../Pages/languagePage';
import productPage from '../Pages/productPage';
import cartPage from '../Pages/cartPage';
import accountPage from '../Pages/accountPage';

describe('Tests', function(){
    const mp = new mainPage()
    const lp = new languagePage()
    const pp = new productPage()
    const cp = new cartPage()
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




  

