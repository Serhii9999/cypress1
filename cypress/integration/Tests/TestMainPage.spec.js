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


       
    it('Test simple search', function(){
      
        cy.visit('https://amazon.com')
        mp.searchFor('Java')
        mp.sectionDropDown('Books')
        mp.clickSearch()
        const searchURL = 'https://www.amazon.com/s?k=Java&i=stripbooks-intl-ship&ref=nb_sb_noss';
        cy.url().as('url');

        cy.get('@url').should('contain', searchURL);

    })
    it('Test go to cart page ', function(){
      
        cy.visit('https://amazon.com')
        mp.clickCartButton()
        cy.url().as('url');

        cy.get('@url').should('contain', 'nav_cart');

    })
        


    it('Test go to today deals  page', function(){
      
        cy.visit('https://amazon.com')
        mp.clickTodayDealsButton()
        cy.get('h1').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Deals and Promotions')
          })

    })


    it('Test go to customer service  page', function(){
      
        cy.visit('https://amazon.com')
        mp.clickCustomerServiceButton()
        cy.get('h1').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Hello. What can we help you with?')
          })

    })

    it('Test go to gift cards  page', function(){
      
        cy.visit('https://amazon.com')
        mp.clickGiftCardsButton()
        cy.get('h1').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Gift Cards')
          })

    })

    it('Test go to registry  page', function(){
      
        cy.visit('https://amazon.com')
        mp.clickRegistryButton()
        
        cy.get('div[class="gr-header gr-header--lg"]').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Registry & Gifting')
          })

    })



     
    it('Test getting text of the element', function(){
      
        cy.visit('https://amazon.com')
        mp.getSignInText().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Hello, Sign in')
          })

    })

    
    it('Test go to sign in page', function(){
      
        cy.visit('https://amazon.com')
        mp.clickSignInButton()
        cy.wait(1000)
        cy.get('h1').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Sign-In')
          })

    })







    //problem
     // it('Test go to sell  page', function(){
      
    //     cy.visit('https://amazon.com')
    //     mp.clickSellButton()
    //     cy.wait(1000)
    //     cy.get('h1').should(($div) => {
            
    //         expect($div.get(0).innerText).to.eq('Become an Amazon seller')
    //       })

    // })
   




   

  




    
})