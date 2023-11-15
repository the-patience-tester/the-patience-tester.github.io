export class Helpers {
  click (id) {
    cy.get(`[id="${id}"]`).click()
  }

  checkInput(input) {
    cy.get('[id="input"]').should('have.text', input)
  }

  checkResult(result) {
    cy.get('[id="result"]').should('have.text', result)
  }
}
