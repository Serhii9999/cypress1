import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';


describe('Test go to', function(){
    const mp = new mainPage()
    beforeEach(() => {
        cy.visit('')
        
      })

      it('Test go to sign in page', function(){
      
        mp.clickSignInButton()
        cy.wait(1000)
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Sign-In')
          })

    })

      it('Test go to cart page ', function(){
      
        mp.clickCartButton()
        cy.url().as('url');
        cy.get('@url').should('contain', 'nav_cart');

    })
        


    it('Test go to today deals  page', function(){
      
        mp.clickTodayDealsButton()
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Deals and Promotions')
          })

    })


    it('Test go to customer service  page', function(){
      
        mp.clickCustomerServiceButton()
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Hello. What can we help you with?')
          })

    })

    it('Test go to gift cards  page', function(){
      
        
        mp.clickGiftCardsButton()
        cy.get('h1').should(($div) => {
            expect($div.get(0).innerText).to.eq('Gift Cards')
          })

    })

    it('Test go to registry  page', function(){
      
        mp.clickRegistryButton()
        cy.get('div[class="gr-header gr-header--lg"]').should(($div) => {
            expect($div.get(0).innerText).to.eq('Registry & Gifting')
          })

    })


      })


describe('Tests', function(){
    const mp = new mainPage()

    beforeEach(() => {
        cy.visit('')
        
      })

      

    it('Test change shipping country', function(){

        const country = 'Ukraine'
        mp.clickShippingSection()
        mp.changeShippingCountryButton(country)
        mp.clickShippingDoneButton()
        cy.get('#nav-global-location-popover-link').should(($div) => {
            expect($div.get(0).innerText).to.contain(country)
          })


    })
       


    it('Test getting text of the element', function(){

        mp.getSignInText().should(($div) => {
            expect($div.get(0).innerText).to.eq('Hello, Sign in')
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