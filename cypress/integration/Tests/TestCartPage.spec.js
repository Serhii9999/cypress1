import * as _ from 'lodash';
import mainPage from '../Pages/mainPage';
import languagePage from '../Pages/languagePage';
import productPage from '../Pages/productPage';
import cartPage from '../Pages/cartPage';
import accountPage from '../Pages/accountPage';

describe('Tests', function(){
    const mp = new mainPage()
    const lp = new languagePage()
    const pp = new productPage()
    const cp = new cartPage()
    const ap = new accountPage()


    it('Test add 12 similar items', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnFirstProductOnThePage()
        cp.clickAddProductToCartButton() 
        mp.clickMainPageBytton() 
        mp.clickCartButton()
        cp.clickSelectQuantityBuytton('10+')
        cy.wait(1000)
        cp.typeProductQuantityField(12)
        cy.wait(1000)
        cp.clickUpdateQuantityButton()
        cy.wait(4000)
        cy.get('#sc-subtotal-label-activecart').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Subtotal (12 items):')
          })

    })
    it('Test adding 3 items to a cart ', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnFirstProductOnThePage()
        cp.clickAddProductToCartButton() 
        mp.clickMainPageBytton() 
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnSecondProductOnThePage()
        cp.clickAddProductToCartButton() 
        mp.clickMainPageBytton() 
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnThirdProductOnThePage()
        cp.clickAddProductToCartButton() 
        mp.clickMainPageBytton() 
      
        mp.clickCartButton()
        cy.wait(1000)
        cy.get('#sc-subtotal-label-activecart').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Subtotal (3 items):')
          })
        
      })

    it('Test proceed to checkout button ', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnFirstProductOnThePage()
        cp.clickAddProductToCartButton()  
        mp.clickMainPageBytton() 
        mp.clickCartButton()
        cp.clickProceedToCheckoutButton()
        const proceedToChechoutURL = 'https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fbuy%2Fsignin%2Fhandlers%2Fcontinue.html%3Fie%3DUTF8%26brandId%3D%26cartItemIds%3D%26eGCApp%3D%26hasWorkingJavascript%3D0%26isEGCOrder%3D0%26isFresh%3D%26oldCustomerId%3D0%26oldPurchaseId%3D%26preInitiateCustomerId%3D%26purchaseInProgress%3D%26ref_%3Dcart_signin_submit%26siteDesign%3D&pageId=amazon_checkout_us&showRmrMe=0&siteState=isRegularCheckout.1%7CIMBMsgs.%7CisRedirect.1&suppressSignInRadioButtons=0'
        cy.url().as('url');
      
        cy.get('@url').should('contain', 'amazon_checkout');
  
  
        
      })
    it('Test delete button in cart ', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnFirstProductOnThePage()
        cp.clickAddProductToCartButton()  
        mp.clickMainPageBytton() 
        mp.clickCartButton()
        cp.clickDeleteButton()
        cy.get('h2').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Your Amazon Cart is empty')
          })
        
      })
   
    it('Test adding 1 item to a cart ', function(){
        cy.visit('https://amazon.com')
        mp.clickMenuButton()
        mp.clickElectronicsSectionButton()
        mp.clickCameraAndPhotoPageButton()
        pp.clickOnFirstProductOnThePage()
        cp.clickAddProductToCartButton()  
        cp.clickGoToCartFromProductPageButton()
        cy.get('#sc-subtotal-label-activecart').should(($div) => {
            
            expect($div.get(0).innerText).to.eq('Subtotal (1 item):')
          })
        
      })

    it('Test cart is  empty ', function(){
        cy.visit('https://amazon.com')
      mp.clickCartButton()
      cy.get('h2').should(($div) => {
            
        expect($div.get(0).innerText).to.eq('Your Amazon Cart is empty')
      })
        

    })

 
        
   

    })

  




    
