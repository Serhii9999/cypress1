import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import languagePage from '../Pages/languagePage';
import productPage from '../Pages/productPage';

describe('Tests', function(){
    const mp = new mainPage()
    const lp = new languagePage()
    const pp = new productPage()


    it('Test simple search', function(){
      
        cy.visit('https://amazon.com')
        mp.searchFor('Java')
        mp.clickSearch()
        const searchURL = 'https://www.amazon.com/s?k=Java&ref=nb_sb_noss_2';
        cy.url().as('url');

        cy.get('@url').should('eq', searchURL);

    })

     
    it('Test getting text of the element', function(){
      
        cy.visit('https://amazon.com')
        mp.getSignInText().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Hello, Sign in')
          })

    })



   

  




    
})