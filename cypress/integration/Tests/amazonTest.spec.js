import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import languagePage from '../Pages/languagePage';
import productPage from '../Pages/productPage';

describe('Tests', function(){
    const mp = new mainPage()
    const lp = new languagePage()
    const pp = new productPage()


    it('Advanced product search', function(){
        cy.visit('https://www.amazon.com/s?i=specialty-aps&bbn=16225009011&rh=n%3A%2116225009011%2Cn%3A502394&ref=nav_em__nav_desktop_sa_intl_camera_and_photo_0_2_5_3');
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

    
 

    it('Test visit Language page', function(){
        cy.visit('https://amazon.com')
        mp.clickLanguagePage()
      const changeLanguageUrl = 'https://www.amazon.com/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2F';
      cy.url().as('url');
      
      cy.get('@url').should('eq', changeLanguageUrl);


    })


    it('Test change Language', function(){
        cy.visit('https://amazon.com')
        mp.clickLanguagePage()
        lp.clickEnglishLanguage().should('be.checked')


    })

    it('Check top text of the language page', function(){
        cy.visit('https://www.amazon.com/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2Fref%3Dnav_logo')
        lp.clickEnglishLanguage()
        lp.checkTopText().contains('Idioma')

    })

    it('Test change currency', function(){
        cy.visit('https://amazon.com')
        mp.clickLanguagePage()
        cy.wait(2000)
        lp.clickCurrencyDropDown()
        const currency = 'ARS - Argentine Peso'
        lp.selectCurrency(currency)
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