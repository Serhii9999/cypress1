import * as _ from 'lodash';

class mainPage{
    searchFor(value) {
         cy.get('input[id="twotabsearchtextbox"]').click().wait(1000).type(value)
         cy.wait(2000)
         
  }
    sectionDropDown(value) {
        cy.get('#searchDropdownBox').select(first).click()
    }
    clickSearch() {
     cy.get('input[id="nav-search-submit-button"]').click() 
     return this
    
    }

    clickLanguagePage() {
        cy.wait(1000)
        cy.get('a[id="icp-nav-flyout"]').click()
        cy.wait(2000)
    }

    clickMenuButton() {
        cy.wait(1000)
        return cy.get('a[id="nav-hamburger-menu"]').click()
        
    }

    clickElectronicsSectionButton() {
        cy.wait(1000)
        return cy.get('a[data-menu-id="5"]').contains('Electronic').click()
    }

    clickCameraAndPhotoPageButton() {
        cy.wait(1000)
        return cy.get('a[class="hmenu-item"]').contains('Camera').click()
    }

    clickCurrencyButton() {
        cy.get('a[id="icp-touch-link-cop"]/span[2]').click()
    }

    getSignInText() {
        return cy.get('#nav-link-accountList-nav-line-1')
    }


  

  



  

  }
  

export default mainPage



