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

       
    it('Test sign out', function(){
        cy.visit('https://amazon.com')

        const email = 'serhii.maletych@gmail.com'
        const password = '1234567mal'
        mp.clickSignInButton()
        ap.enterEmailField(email)
        ap.clickContinueButton()
        ap.enterPasswordField(password)
        ap.clickSignInButton()
        mp.clickSignInButton()
        ap.hoverOnAccountButton()
        

    })
    
    it('Test sign in ', function(){
        cy.visit('https://amazon.com')

        const email = 'serhii.maletych@gmail.com'
        const password = '1234567mal'
        mp.clickSignInButton()
        ap.enterEmailField(email)
        ap.clickContinueButton()
        ap.enterPasswordField(password)
        ap.clickSignInButton()
        mp.clickSignInButton()
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Your Account')
          })

    })
  

    })

  




    
