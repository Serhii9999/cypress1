
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

     setLowPrice(value) {
        cy.get('#low-price').type(value)
     }

     setHighPrice(value) {
         cy.get('#high-price').type(value)
     }

     clickPriceSubmitButton() {
         cy.get('input[aria-labelledby="a-autoid-1-announce"]').click()
     }

     findFirstSamsungProduct() {
         return cy.get('span[class="a-size-base-plus a-color-base a-text-normal"]').first()
     }

     clickOnFirstProductOnThePage() {
         cy.get('img[data-image-index="1"]').click()
         cy.wait(1000)
     }

     clickOnSecondProductOnThePage() {
        cy.get('img[data-image-index="2"]').click()
        cy.wait(1000)
    }

    clickOnThirdProductOnThePage() {
        cy.get('img[data-image-index="3"]').click()
        cy.wait(1000)
    }

    clickShippingDoneWhenOnProductPageButton() {
        cy.get('button[name="glowDoneButton"]').click()
    }

  
}
export default productPage


