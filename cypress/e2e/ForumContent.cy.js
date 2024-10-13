describe('Forum Content Test', () => {
  it('Checks Forum Content', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(3).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Car Forums')
    cy.get('.p-author').contains('Bishoyy')
    cy.get('.h2-content').contains('Nissan')
    cy.get('.thumbnail').eq(0).should('be.visible')


    cy.get('.p-author').contains('Top Gear')
    cy.get('.h2-content').contains('SECRET')
    cy.get('.thumbnail').eq(1).should('be.visible')


    cy.get('.p-author').contains('MotorTrend')
    cy.get('.h2-content').contains('Acura')
    cy.get('.thumbnail').eq(2).should('be.visible')


    cy.get('.p-author').contains('Beemerboy')
    cy.get('.h2-content').contains('M2')
    cy.get('.thumbnail').eq(3).should('be.visible')


    cy.get('.p-author').contains('Subie404')
    cy.get('.h2-content').contains('spark plugs')

    //Checks the content of userforum.html
    cy.get('.h2-content').contains('Nissan').click()
    cy.get('.h1-title').contains('Clean Nissan R34 Skyline GT-R')


  })
})