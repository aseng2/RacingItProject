describe('Motorsport Content Test', () => {
  it('Checks Motorsport Content', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(6).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Motorsports')
    cy.get('.h2-content').contains('Formula 1')

    cy.get('.h2-content').contains('World Endurance Championship')

    cy.get('.h2-content').contains('DTM')

    //Checks the content of userforum.html
    cy.get('.h2-content').contains('Formula 1').click()
    cy.get('.h1-title').contains('Formula 1')
  })
})