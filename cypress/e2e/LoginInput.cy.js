describe('Login Input Test', () => {
  it('Inputs info into the Login', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('.buttonpages').eq(0).click()

    cy.get('#username').type('SebV5')
    cy.get('#password').type('FerrariFan05')

    cy.get('.formbutton').click()
    cy.get('.h2-noti').contains('You Have Logged In')

  })
})