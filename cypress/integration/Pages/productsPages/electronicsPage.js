import * as _ from 'lodash';
class electronicsPage{

    findFirstSamsungProduct() {
        return cy.get('span[class="a-size-base-plus a-color-base a-text-normal"]').first()
    }


   
    
    
}
export default  electronicsPage

