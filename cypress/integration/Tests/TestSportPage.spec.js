import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import productPage from '../Pages/productsPages/productPage';
import sportPage from '../Pages/productsPages/sportPage';

describe('Tests search', function(){
    const mp = new mainPage()
    const pp = new productPage()
    const sp = new sportPage()


    beforeEach(() => {
        cy.visit('')
        
      })

      it('Test  product search ', function(){
        
      
        mp.clickMenuButton()
        mp.clickSeeAllProductsInMenuButton()
        mp.clickSportSectionButton()
        mp.clickCSportAndFitnessPageButton()
        sp.getSportProductTitle().should('have.length', 33)


    
    })

    it('Test  product search 2', function(){
        
       
        mp.clickMenuButton()
        mp.clickSeeAllProductsInMenuButton()
        mp.clickSportSectionButton()
        mp.clickCSportAndFitnessPageButton()
        pp.setLowPrice(19000)
        pp.setHighPrice(20000)
        pp.clickPriceSubmitButton()
        sp.getSportProductTitle().should('have.length', 1)


    
    })

    })
