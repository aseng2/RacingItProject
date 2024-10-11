describe('Presses Multiple Buttons', () => {
  it('Presses Multiple Buttons', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(0).click()
    cy.get('.buttonpages').eq(1).click()
    cy.get('.buttonpages').eq(2).click()
    cy.get('.buttonpages').eq(3).click()
    cy.get('.buttonpages').eq(4).click()
    cy.get('.buttonpages').eq(5).click()
    cy.get('.buttonpages').eq(6).click()
    cy.get('.buttonpages').eq(7).click()
    cy.get('h1').click()
  })
})