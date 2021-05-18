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
        
      })

   
    it('Test simple search', function(){
      
       
        mp.searchFor('Java')
        mp.sectionDropDown('Books')
        mp.clickSearch()
        const searchURL = 'https://www.amazon.com/s?k=Java&i=stripbooks-intl-ship&ref=nb_sb_noss';
        cy.url().as('url');

        cy.get('@url').should('contain', searchURL);

    })

    it('Test  product search 2', function(){
        const thirdGermanJavaBook = 'Agile objektorientierte Software-Entwicklung';
      
        mp.searchFor('Java')
        mp.sectionDropDown('Books')
        mp.clickSearch()
        pp.clickGermanCheckBoxInBooksSection()
    

        pp.getBookTitle().eq(2).should(($div) => {
            
            expect($div.get(0).innerText).to.contain(thirdGermanJavaBook)
          })
    })


 
    it('Test  product search 3', function(){
        
      
        mp.clickMenuButton()
        mp.clickSeeAllProductsInMenuButton()
        mp.clickSportSectionButton()
        mp.clickCSportAndFitnessPageButton()
        pp.getSportProductTitle().should('have.length', 33)


    
    })

    it('Test  product search 4', function(){
        
       
        mp.clickMenuButton()
        mp.clickSeeAllProductsInMenuButton()
        mp.clickSportSectionButton()
        mp.clickCSportAndFitnessPageButton()
        pp.setLowPrice(19000)
        pp.setHighPrice(20000)
        pp.clickPriceSubmitButton()
        pp.getSportProductTitle().should('have.length', 1)


    
    })

    it('Test quantity of books on a page', function(){
       
        mp.searchFor('Java')
        mp.sectionDropDown('Books')
        mp.clickSearch()
        pp.getBookTitle().should('have.length', 16)
        

    })

  

    it('Test change shipping price when country is changed1', function(){
        const firstCountry = 'India'
        const ShippingTextForFirstCountry = '$437.05 Shipping & Import Fees Deposit to India'
    
       
        mp.searchFor('Samsung Electronics Samsung Galaxy S21 5G')
        mp.clickSearch()
        pp.clickOnFirstProductOnThePage()
        mp.clickShippingSection()
        mp.changeShippingCountryButton(firstCountry)
        pp.clickShippingDoneWhenOnProductPageButton()
        cy.get('#exports_desktop_qualifiedBuybox_tlc_feature_div').should(($div) => {
            
            expect($div.get(0).innerText).to.contain(ShippingTextForFirstCountry)
          })


    })

    it('Test change shipping price when country is changed2', function(){
     
        const secondCountry = 'Chile'
      
        const ShippingTextForSecondCountry = '$265.94 Import Fees Deposit & FREE Shipping to Chile'
        
        mp.searchFor('Samsung Electronics Samsung Galaxy S21 5G')
        mp.clickSearch()
        pp.clickOnFirstProductOnThePage()
       

          mp.clickShippingSection()
          mp.changeShippingCountryButton(secondCountry)
          pp.clickShippingDoneWhenOnProductPageButton()
          cy.get('#exports_desktop_qualifiedBuybox_tlc_feature_div').should(($div) => {
              
              expect($div.get(0).innerText).to.contain(ShippingTextForSecondCountry)
            })
        

    })

    it('Test product search', function(){
        
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
       
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        cy.url().as('url');
        cy.get('@url').should('contain', 'camera_and_photo')
    })

    it('Check first books title', function(){
      
        
        mp.searchFor('Java')
        mp.clickSearch()
        pp.getTitleOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Effective Java')
          })
    })

    it('Check first books author', function(){
      
        
        mp.searchFor('Java')
        mp.clickSearch()
        pp.getAuthorOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Joshua Bloch')
          })
    })

  




    
})