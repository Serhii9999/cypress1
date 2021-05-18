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

    it('Advanced product search', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.click4StarsButton()
        cy.wait(3000)
       pp.setLowPrice(5)
       pp.setHighPrice(25)
       pp.clickPriceSubmitButton()
        const expectedSamsungProduct = 'SAMSUNG: EVO Select 128GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME128HA)';
        pp.findFirstSamsungProduct().should(($div) => {
            
         expect($div.get(0).innerText).to.eq(expectedSamsungProduct)
       })
     })
 
    it('Test go to electronics page', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        cy.url().as('url');
        cy.get('@url').should('contain', 'camera_and_photo')
    })

    it('Check first books title', function(){
      
        cy.visit('https://amazon.com')
        mp.searchFor('Java')
        mp.clickSearch()
        pp.getTitleOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Effective Java')
          })
    })

    it('Check first books author', function(){
      
        cy.visit('https://amazon.com')
        mp.searchFor('Java')
        mp.clickSearch()
        pp.getAuthorOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Joshua Bloch')
          })
    })

  




    
})