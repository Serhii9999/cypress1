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

    it('Test visit Language page', function(){
       
        mp.clickLanguagePage()
      const changeLanguageUrl = 'https://www.amazon.com/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2F';
      cy.url().as('url');
      
      cy.get('@url').should('eq', changeLanguageUrl);


    })

    it('Test change Language', function(){
       
        mp.clickLanguagePage()
        lp.clickEnglishLanguage().should('be.checked')


    })

    it('Check top text of the language page', function(){
        cy.visit('https://www.amazon.com/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2Fref%3Dnav_logo')
        lp.clickEnglishLanguage()
        lp.checkTopText().contains('Idioma')

    })

    it('Test change currency', function(){
       
        mp.clickLanguagePage()
        cy.wait(2000)
        lp.clickCurrencyDropDown()
        const currency = 'ARS - Argentine Peso'
        lp.selectCurrency(currency)
    })


    })

  




    
