describe('Car Club Content Build', () => {
  it('Check Car Content Build', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(5).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Car Clubs')

    cy.get('.h2-content').contains('Brekkie Car Club')
    cy.get('.thumbnail').eq(0).should('be.visible')

    cy.get('.h2-content').contains('Porsche Club of America')
    cy.get('.thumbnail').eq(1).should('be.visible')

    cy.get('.h2-content').contains('BMW Car Club of America')
    cy.get('.thumbnail').eq(2).should('be.visible')

    cy.get('.h2-content').contains('Otto Car club')
    cy.get('.thumbnail').eq(3).should('be.visible')

    cy.get('.h2-content').contains('Lamborghini Club America')
    cy.get('.thumbnail').eq(4).should('be.visible')

    //Checks the content of userforum.html
    cy.get('.h2-content').contains('Brekkie Car Club').click()
    cy.get('.h1-title').contains('Brekkie Car Club')
  })
})