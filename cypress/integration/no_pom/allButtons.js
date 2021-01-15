require('cypress-xpath')

it("Opens website", function(){
    cy.clearCookies();
    cy.visit("https://switch-uat.ovoenergy.com/");
    cy.title().should('include', "OVO");
    cy.wait(1000);   
})

it("Enters the address", function(){
    
    cy.get('[data-testid=postcode-address-postcode-input]').clear();
    cy.get('[data-testid=postcode-address-postcode-input]').type("bs3 1lh");
    cy.get('[data-testid=postcode-address-find-postcode-button] > span').click();
    cy.wait(2000);
    cy.get('[data-testid=postcode-address-address-dropdown]').select("39 Fairfield Place, Southville, BRISTOL, Avon, BS3 1LH");
})


it ("Tests radio buttons", function(){
    //pay as you go
    cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv').click()
    cy.wait(1000)

    //pay on demand 
    cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(4) > .sc-fbkhIv').click()
    cy.wait(1000)

    //back to paym
    cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv').click()
    cy.wait(2000)

    //electricity and gas
    cy.get('.sc-kstrdz.mb-6 > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv').click()
    cy.get('.sc-kstrdz.mb-6 > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv').click()

    //bedrooms
    cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv').click()
    cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(4) > .sc-fbkhIv').click()
    cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv').click()




    //submit
    cy.get('[data-testid=get-quote-submit-button]').click();
    cy.xpath('//h1[@class="sc-gsTCUz debKWk text-center"]').should('contain', 'Smart')


})
  
