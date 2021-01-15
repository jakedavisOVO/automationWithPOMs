class addressEntry{
    postcodeInput(){
        return cy.get('[data-testid=postcode-address-postcode-input]')
    }
    
    postcodeFind(){
        return cy.get('[data-testid=postcode-address-find-postcode-button] > span')
    }

    addressDropdown(){
        return cy.get('[data-testid=postcode-address-address-dropdown]')
    }

    addressSubmit(){
        return cy.get('[data-testid=get-quote-submit-button]')
    }
}


export default addressEntry