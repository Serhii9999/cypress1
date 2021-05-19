import * as _ from 'lodash';
class bookPage{

    getTitleOfTheFirstBook() {
       
        return cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').first()
         
     }

     getAuthorOfTheFirstBook() {
         return cy.get('a[class="a-size-base a-link-normal"]').first()
     }

     getBookTitle() {
        return cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"]')
    }

    clickGermanCheckBoxInBooksSection() {
        cy.get('div[class="a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left"]').eq(13).click()
        cy.wait(1000)
    }



   
    
    
}
export default  bookPage


