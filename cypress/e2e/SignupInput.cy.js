describe('Signup Input Test', () => {
  it('Inputs info into the Signin', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(1).click()

    cy.get('#username').type('BeemerBoy76')
    cy.get('#password').type('ILUVM4')
    cy.get('#password-2').type('ILUVM4')

    cy.get('.formbutton').click()
    cy.get('.h2-noti').contains('You Have Logged In')

  })
})