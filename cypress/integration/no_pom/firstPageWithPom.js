describe("Quote and Switch", function(){
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
        
        cy.get('[data-testid=postcode-address-postcode-input]').clear();
        cy.get('[data-testid=postcode-address-postcode-input]').type("bs3 1lh");
        cy.get('[data-testid=postcode-address-find-postcode-button] > span').click();
        cy.wait(2000);
        cy.get('[data-testid=postcode-address-address-dropdown]').select("39 Fairfield Place, Southville, BRISTOL, Avon, BS3 1LH");
        cy.get('[data-testid=get-quote-submit-button]').click();
        // cy.get('[data-testid=get-quote-submit-button]').click();
    })

    it("Selects smart meter", function(){
        cy.clearCookies();
        cy.wait(1000);
        cy.get(':nth-child(3) > .sc-fbkhIv ').click({ multiple: true });
        cy.get('[data-testid=smart-meter-submit-button]').click();
    })

    it("see elec plan info", function(){
        cy.wait(1000);
        cy.get(':nth-child(2) > .w-full > .flex > :nth-child(1)').click();

        const unit_rate = cy.get(':nth-child(2) > .w-full > .flex > :nth-child(1)');
        cy.wait(2000);
        cy.get('[data-testid=close-modal]').click();
    })

    it("see gas plan info", function(){
        cy.wait(1000);
        cy.get(':nth-child(2) > .w-full > .flex > :nth-child(3)').click();

        cy.wait(2000);
        cy.get('[data-testid=close-modal]').click();
        cy.get('[data-testid=select-2yearfixed-tariff]').click()
        cy.get('[data-testid=switch-plan-page]').click();
    
    })

    it("signs customer up", function(){
        cy.clearCookies();
        cy.get('[data-testid=details-title]').select('Mr');
        //generate a random name
    
        let name_split =  name.split(/ (.*)/);
        // split that name into the relevant fields
        cy.get('[data-testid=details-first-name]').clear();
        cy.get('[data-testid=details-first-name]').type(name_split[0]);
        cy.wait(2000)


        cy.get('[data-testid=details-surname]').clear();
        cy.get('[data-testid=details-surname]').type(name_split[1]);
        cy.wait(2000)

        cy.get('[data-testid=details-mobile]').clear();
        cy.get('[data-testid=details-mobile]').type(chance.phone({ country: 'uk' }));
        cy.wait(2000)
        
        cy.get('[data-testid=details-email]').clear();
        cy.get('[data-testid=details-email]').type(chance.email());
        cy.wait(2000)

        cy.get('[data-testid=details-password]').clear();
        cy.get('[data-testid=details-password]').type(chance.word({ length: 8 }));
        cy.wait(2000)

        //dob 
        cy.get('#details-dob').clear();
        cy.get('#details-dob').type(chance.integer({min: 1, max:29}));
        cy.wait(2000)
        cy.get('#details-dob-month').clear();
        cy.get('#details-dob-month').type(chance.integer({min:1, max: 12}));
        cy.wait(2000)
        cy.get('#details-dob-year').clear();
        cy.get('#details-dob-year').type(chance.integer({min:1900, max:2000}));
        cy.wait(2000)

        cy.wait(2000);
        cy.get('[data-testid=details-submit]').click();
    })

    it("Sets up the bank account", function(){
        //Account Holder
        cy.get('[data-testid=bank-account-name]').type(name);
        cy.wait(3000)

        //generate a random account number
        let accountNumber = Math.floor(10000000 + Math.random() * 90000000);
        cy.get('[data-testid=bank-account-number]').type(accountNumber);

        //generate a random sort code
        let sortCode = Math.floor(100000 + Math.random() * 900000);
        cy.get('[data-testid=bank-sort-code]').type(sortCode);

        //tick boxes
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .sc-kstrdz > .sc-fodVxV > .sc-bkzZxe').click()
        cy.get(':nth-child(3) > .sc-kstrdz > .sc-fodVxV > .sc-bkzZxe').click()
        cy.get('[data-testid=bank-submit]').click()
        cy.get('div.p-8').should('contain', "Just to recap");
    })

    })

    