describe('e2e tests', () => {
  it('welcome page', () => {
    cy.intercept('GET', 'https://gallery.localhost.pomerium.io/api/users/me', {
      fixture: 'users/me',
    }).as('getMe')
    cy.intercept(
      'GET',
      'https://gallery.localhost.pomerium.io/api/images?page=0',
      { fixture: 'images/page_0' },
    ).as('getImages')
    cy.visit('/')
    cy.contains('Siguiente')
  })
})
