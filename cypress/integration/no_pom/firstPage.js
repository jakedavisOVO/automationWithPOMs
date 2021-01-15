require('cypress-xpath')


var Chance = require('chance');
var chance = new Chance();

let name = chance.name()

it("Opens website", function(){
    cy.clearCookies();
    cy.visit("https://switch-uat.ovoenergy.com/");
    cy.title().should('include', "OVO");
    cy.wait(1000);   
})

it("checks the functionality of the first page", function(){
    
    cy.get('[data-testid=postcode-address-postcode-input]').clear();
    cy.get('[data-testid=postcode-address-postcode-input]').type("bs3 1lh");
    cy.get('[data-testid=postcode-address-find-postcode-button] > span').click();
    cy.wait(2000);
    cy.get('[data-testid=postcode-address-address-dropdown]').select("39 Fairfield Place, Southville, BRISTOL, Avon, BS3 1LH");
    cy.get('[data-testid=get-quote-submit-button]').click();
    cy.xpath('//h1[@class="sc-gsTCUz debKWk text-center"]').should('contain', 'Smart')
})