import * as _ from 'lodash';

class mainPage{

    searchFor(value) {
         cy.get('input[id="twotabsearchtextbox"]').click().wait(1000).type(value)
         cy.wait(2000)
         
  }
    sectionDropDown(value) {
        cy.get('#searchDropdownBox', {force:true}).select(value, {force:true})
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
        return cy.get('a[id="nav-hamburger-menu"]').click({force: true})
        
    }

    clickSeeAllProductsInMenuButton() {
        return cy.get('a[class="hmenu-item hmenu-compressed-btn"]').eq(0).click()
    }

    clickSportSectionButton() {
        return cy.get('a[data-menu-id="23"]').click({force:true})
    }

    clickCSportAndFitnessPageButton() {
        cy.wait(1000)
        return cy.get('a[class="hmenu-item"]').contains('Sports & Fitness').click({force: true})
    }

    clickElectronicsSectionButton() {
        cy.wait(1000)
        return cy.get('a[data-menu-id="5"]').contains('Electronic').click({force: true})
    }

    clickCameraAndPhotoPageButton() {
        cy.wait(1000)
        return cy.get('a[class="hmenu-item"]').contains('Camera').click({force: true})
    }

    clickCurrencyButton() {
        cy.get('a[id="icp-touch-link-cop"]/span[2]').click()
    }

    getSignInText() {
        return cy.get('#nav-link-accountList-nav-line-1')
    }

    clickSignInButton() {
        cy.get('#nav-link-accountList').click({force: true})
    }

    clickTodayDealsButton() {
        cy.get('a[data-csa-c-slot-id="nav_cs_0"]').click({force:true})
        cy.wait(1000)
    }

    clickCustomerServiceButton() {
        cy.get('a[data-csa-c-slot-id="nav_cs_1"]').click({force:true})
        cy.wait(1000)
    }

    clickGiftCardsButton() {
        cy.get('a[data-csa-c-slot-id="nav_cs_2"]').click({force:true})
        cy.wait(1000)
    }

    clickRegistryButton() {
        cy.get('a[data-csa-c-slot-id="nav_cs_3"]').click({force:true})
        cy.wait(1000)
    }
    // clickSellButton() {
    //     cy.get('a[data-csa-c-slot-id="nav_cs_4"]').click({force:true})
    //     cy.wait(1000)
    // }

  
    clickCartButton(){
        cy.get('#nav-cart').click({force:true})
        cy.wait(1000)
    }

    clickMainPageBytton() {
        cy.get('#nav-logo-sprites').click({force:true})
    }

    clickShippingSection() {
        cy.get('#nav-global-location-popover-link').click({force:true})
        cy.wait(1000)
    }

    changeShippingCountryButton(value) {
        cy.get('#GLUXCountryList',).select(value, {force:true})
        cy.wait(1000)
    }
    clickShippingDoneButton() {
        cy.get('#GLUXCountryListDropdown').click()
    }

    clickYourAmazonButton() {
        cy.get('#nav-your-amazon').click({force:true})
        cy.wait(1000)
    }

    clickRegistrationButton() {
        cy.xpath('div[id="nav-flyout-ya-newCust"]/a').click()
        
    }
    


   



  

  



  

  }
  

export default mainPage



