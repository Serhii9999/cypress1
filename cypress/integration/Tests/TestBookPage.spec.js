import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import productPage from '../Pages/productsPages/productPage';
import bookPage from '../Pages/productsPages/bookPage';

describe('Tests search', function(){
    const mp = new mainPage()
    const pp = new productPage()
    const bp = new bookPage()


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
        bp.clickGermanCheckBoxInBooksSection()
    

        bp.getBookTitle().eq(2).should(($div) => {
            
            expect($div.get(0).innerText).to.contain(thirdGermanJavaBook)
          })
    })


    it('Test quantity of books on a page', function(){
       
        mp.searchFor('Java')
        mp.sectionDropDown('Books')
        mp.clickSearch()
        bp.getBookTitle().should('have.length', 16)
        

    })


    it('Check first books title', function(){
      
        mp.searchFor('Java')
        mp.clickSearch()
        bp.getTitleOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Effective Java')
          })
    })

    it('Check first books author', function(){
      
        mp.searchFor('Java')
        mp.clickSearch()
        bp.getAuthorOfTheFirstBook().should(($div) => {
           
            expect($div.get(0).innerText).to.eq('Joshua Bloch')
          })
    })

    })
