describe('Build Content Test', () => {
  it('Checks Build Content', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(2).click()

    //Checks the Main Page Content First
    cy.get('.h3-title').contains('Car Builds')
    cy.get('.p-author').eq(0).contains('Freshhkkicks')
    cy.get('.h2-content').contains('BMW')
    cy.get('.thumbnail').eq(0).should('be.visible')


    cy.get('.p-author').eq(1).contains('Freshhkkicks')
    cy.get('.h2-content').contains('Nissan Silva S15')
    cy.get('.thumbnail').eq(1).should('be.visible')


    cy.get('.p-author').contains('Stradman')
    cy.get('.h2-content').contains('Pink Lamborghini Aventador Widebody')
    cy.get('.thumbnail').eq(2).should('be.visible')


    cy.get('.p-author').contains('AutoID')
    cy.get('.h2-content').contains('Audi R8 GT Build')
    cy.get('.thumbnail').eq(3).should('be.visible')


    cy.get('.p-author').eq(4).contains('AutoID')
    cy.get('.h2-content').contains('Toyota')
    cy.get('.thumbnail').eq(4).should('be.visible')

    //Checks the content of userbuild.html
    cy.get('.h2-content').contains('BMW').click()
    cy.get('.h1-title').contains('$35000 BMW M4 G80 Build')


  })
})