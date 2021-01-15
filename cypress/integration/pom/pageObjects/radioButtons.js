class firstPageRadioButtons{
    payg(){
        return cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv')
    }
    payOnDemand(){
        return cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(4) > .sc-fbkhIv')
    }
    paym(){
        return cy.get(':nth-child(3) > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv')
    }
    elecAndGas(){
        return cy.get('.sc-kstrdz.mb-6 > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv')
    }
    elecOnly(){
        return cy.get('.sc-kstrdz.mb-6 > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv')
    }
    oneBed(){
        return cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(3) > .sc-fbkhIv')
    }
    twoThreeBed(){
        return cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(4) > .sc-fbkhIv')
    }
    fourPlus(){
        return cy.get(':nth-child(7) > .sc-dQppl > fieldset > :nth-child(2) > .sc-fbkhIv')
    }


}

export default firstPageRadioButtons