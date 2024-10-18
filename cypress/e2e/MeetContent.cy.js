describe('Meet Content Test', () => {
  it('Checks for Meet Content', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(4).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Car Meets')
    cy.get('.p-author').contains('southoccarsandcoffee')
    cy.get('.h2-content').contains('Redbull')
    cy.get('.thumbnail').eq(0).should('be.visible')


    cy.get('.p-author').contains('carsncopters')
    cy.get('.h2-content').contains('2024')
    cy.get('.thumbnail').eq(1).should('be.visible')


    cy.get('.p-author').contains('Brekkie Car Club')
    cy.get('.h2-content').contains('Brekkie')
    cy.get('.thumbnail').eq(2).should('be.visible')


    cy.get('.p-author').contains('malibuautobahn')
    cy.get('.h2-content').contains('Malibu')
    cy.get('.thumbnail').eq(3).should('be.visible')


    cy.get('.p-author').contains('HRE')
    cy.get('.h2-content').contains('HRE Open House')
    cy.get('.thumbnail').eq(4).should('be.visible')

    //Checks the content of userforum.html
    cy.get('.h2-content').contains('Redbull').click()
    cy.get('.flyer').should('be.visible')


  })
})