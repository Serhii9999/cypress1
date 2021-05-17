import * as _ from 'lodash';
class languagePage{

    clickEnglishLanguage() {
        return cy.get('input[type="radio"]').check('es_US',{force:true})
    }

    checkTopText() {
        return cy.get('span[id="lop-heading"]')
    }



    clickCurrencyDropDown() {
        return cy.get('select[id="icp-sc-dropdown"]')
    }

    selectCurrency(value) {
        return this.clickCurrencyDropDown().select(value, {force:true})
    }

    
}
export default languagePage



