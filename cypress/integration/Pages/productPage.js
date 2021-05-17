
import * as _ from 'lodash';
class productPage {
    getTitleOfTheFirstBook() {
       
        return cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').first()
         
     }

     getAuthorOfTheFirstBook() {
         return cy.get('a[class="a-size-base a-link-normal"]').first()
     }

     click4StarsButton() {
         cy.get('i[class="a-icon a-icon-star-medium a-star-medium-4"]').click()
     }

     clickUnder25Button() {
         cy.get('[id="p_36/1253503011"]/span/a/span').click()
     }

     findFirstSamsungProduct() {
         return cy.get('span[class="a-size-base-plus a-color-base a-text-normal"]').first()
     }
}
export default productPage


