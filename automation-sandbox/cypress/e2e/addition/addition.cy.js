import { Helpers } from '../common/common.js'

describe('template spec', () => {
  const helper = new Helpers()
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('adds 2 numbers', () => {
    helper.click('learnToAutomate')
    helper.click('continue')
    cy.get('[id=calcContainer]').scrollTo('bottom', { ensureScrollable: false })
    helper.click('7')
    helper.click('+')
    helper.click('3')
    helper.checkInput('7+3')
    helper.checkResult(`${7 + 3}`)
  })
})
