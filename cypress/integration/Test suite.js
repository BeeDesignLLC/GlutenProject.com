describe('Test suite', function() {
  it('Visits pages', function() {
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/manifesto')
    cy.visit('http://localhost:3000/who')
  })

  it('Check search', function() {
    cy.visit('http://localhost:3000')
    cy.get('input[id="global-product-search"]').focus()
    cy.url({timeout: 60000}).should('contain', '/search')
  })

  it('Search cookies', function() {
    cy.visit('http://localhost:3000')
    cy.get('input[id="global-product-search"]').type('cookies')
  })
})
