import * as _ from 'lodash';
class cartPage{

    clickAddProductToCartButton() {
        cy.get('#add-to-cart-button').click()
        cy.wait(1000)
    }

    clickGoToCartFromProductPageButton() {
        cy.get('#hlb-view-cart-announce').click()
        cy.wait(1000)

    }

    clickSelectQuantityBuytton(value) {
        cy.get('select[name="quantity"]').select(value, {force:true})
    }

    typeProductQuantityField(value) {
       return cy.get('input[data-feature-id="sc-update-quantity-input"]').type(value)
    }

    clickUpdateQuantityButton() {
        cy.get('#a-autoid-1-announce').click({force:true})
    }

    clickDeleteButton() {
        cy.get('input[value="Delete"]').click({force:true})
    }

    clickProceedToCheckoutButton() {
        cy.get('input[name="proceedToRetailCheckout"]').click({force:true})
    }

    clickSignNowButton() {
        cy.get('#a-autoid-1-announce').click()
        cy.wait(1000)
    }
    clickSignInToYourAccountButton() {
        cy.get('#a-autoid-0-announce').click()
        cy.wait(1000)
    }
    clickBottomSignInButton() {
        cy.get('span[class="action-inner"]').click()
        cy.wait(1000)
    }
    

    
}
export default cartPage


