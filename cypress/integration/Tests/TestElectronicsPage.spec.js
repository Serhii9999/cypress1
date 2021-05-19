import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import productPage from '../Pages/productsPages/productPage';
import electronicsPage from '../Pages/productsPages/electronicsPage';



describe('Tests search', function(){
    const mp = new mainPage()
    const pp = new productPage()
    const ep = new electronicsPage()


    beforeEach(() => {
        cy.visit('')
        
      })

      it('Test go to electronics page', function(){
       
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        cy.url().as('url');

        cy.get('@url').should('contain', 'camera_and_photo')

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
        ep.findFirstSamsungProduct().should(($div) => {
            
         expect($div.get(0).innerText).to.eq(expectedSamsungProduct)
       })

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

 
     })

    