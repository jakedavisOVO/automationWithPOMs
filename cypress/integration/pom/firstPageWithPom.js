import addressEntry from '../pom/pageObjects/addressEntry'
require('cypress-xpath')




describe("Quote and Switch", function(){
    // creating an object from addressEntry class
    const address = new addressEntry()

    var Chance = require('chance');
    var chance = new Chance();

    let name = chance.name()

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
        address.addressSubmit().click();

        //next page validation
        cy.xpath('//h1[@class="sc-gsTCUz debKWk text-center"]').should('contain', 'Smart')
        
    })
})
