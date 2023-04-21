describe('template spec', () => {
  const apiKey = 'XCAwGeTk3lPxdD1AXwJIvXP1h2UEuEGU'
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`, {fixture: "home.json"}).as('page-load')
    cy.wait('@page-load')
  })
  
  it('Should display a logo on page load', () => {
    cy.get('h1').contains('Readr')
  })

  it('Should show home articles on page load', () => {
    cy.get('h2').contains('HOME ARTICLES')
    cy.get('.container').children().should('have.length', 1)
    cy.get('.card').contains('‘A Quick Death or a Slow Death’: Prisoners Choose War to Get Lifesaving Drugs')
  })

  it('Should allow a user to click on an article and display more information regarding said article', () => {
    cy.get('.card').click()
    cy.get('.modal-info h3').contains('‘A Quick Death or a Slow Death’: Prisoners Choose War to Get Lifesaving Drugs')
    cy.get('.modal-info p').contains('An estimated 20 percent of Russia prisoner recruits are H.I.V.')
    cy.get('.modal-info p').contains('By Andrew E. Kramer')
    cy.get('.modal-info p').contains('Published at 5 AM, Apr 21, 2023 (EST)')
  })

  it('Should close the modal when clicking on the "x" in the top right corner', () => {
    cy.get('.card').click()
    cy.get('.modal-info').should('be.visible')
    cy.get('.exit-button').click()
    cy.get('.modal-info').should('not.be.visible')
  })

  it('Should allow a user to filter by article category', () => {
    cy.intercept('GET', `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${apiKey}`, {fixture: "books.json"}).as('books-load')
    cy.get('select').select('books')
    cy.get('h2').contains('BOOKS ARTICLES')
    cy.get('.card').contains('A Couple’s Retreat in the Woods Goes Awry in This Thriller')
    cy.get('.card').click()
    cy.get('.modal-info h3').contains('A Couple’s Retreat in the Woods Goes Awry in This Thriller')
    cy.get('.modal-info p').contains('In “The Eden Test,” Adam Sternbergh folds a study of marital')
    cy.get('.modal-info p').contains('By Flynn Berry')
    cy.get('.modal-info p').contains('Published at 9 AM, Apr 21, 2023 (EST)')
  })

  it('Should display an error message when following an unexpected url', () => {
    cy.visit('http://localhost:3000/something')
    cy.get('h3').contains('Oops, we can\'t seem to find that!')
    cy.get('.home-link').click()
    cy.get('.card').should('be.visible')
  })

})