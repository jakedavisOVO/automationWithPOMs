import firstPageRadioButtons  from '../pom/pageObjects/radioButtons'
import addressEntry from '../pom/pageObjects/addressEntry'

require('cypress-xpath')
const radio = new firstPageRadioButtons()
const address = new addressEntry()

it("Opens website", function(){
    cy.clearCookies();
    cy.visit("https://switch-uat.ovoenergy.com/");
    cy.title().should('include', "OVO");
    cy.wait(1000);   
})

it("Page 1", function(){
    //class  //function    //action
    address.postcodeInput().clear();
    address.postcodeInput().type("bs3 1lh");
    address.postcodeFind().click();
    cy.wait(2000);
    address.addressDropdown().select("39 Fairfield Place, Southville, BRISTOL, Avon, BS3 1LH");
})


it ("Tests radio buttons", function(){
    //pay as you go
    radio.payg().click()
    cy.wait(1000)

    //pay on demand 
    radio.payOnDemand().click()
    cy.wait(1000)

    //back to paym
    radio.paym().click()
    cy.wait(2000)

    //electricity and gas
    radio.elecAndGas().click()
    radio.elecOnly().click()

    //bedrooms
    radio.oneBed().click()
    radio.twoThreeBed().click()
    radio.fourPlus().click()

    address.addressSubmit().click();
    //next page validation
    cy.xpath('//h1[@class="sc-gsTCUz debKWk text-center"]').should('contain', 'Smart')


})
  
