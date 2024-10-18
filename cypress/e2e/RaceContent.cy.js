describe('Race Content Test', () => {
  it('Checks Race Track Content', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(7).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Race Tracks')
    cy.get('.h2-states').contains('California')

    cy.get('.h2-states').contains('Nevada')

    //Checks the content of userforum.html
    cy.get('.h2-states').contains('California').click()
    cy.get('.h3-title').contains('California Race Tracks')

    cy.get('.h2-content').contains('Laguna Seca').click()
    cy.get('.h1-title').contains('Laguna Seca')
  })
})