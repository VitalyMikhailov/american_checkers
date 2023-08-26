import { board } from '../support/moves'

describe('Checkers game test suite', () => {
  it('Make 5 moves, get one piece', () => {
    cy.visit('/')

    board.getBoard().should('exist').and('be.visible')

    board
        .getComputerPieces()
        .should('exist')
        .and('have.length', 12)
    board
        .getPlayerPieces()
        .should('exist')
        .and('have.length', 12)


    board.movePiece('space02', 'space13')
    cy.wait(2000)

    board.movePiece('space22', 'space33')
    cy.wait(2000)

    board.movePiece('space42', 'space53')
    cy.wait(2000)

    board.movePiece('space62', 'space73')
    cy.wait(2000)

    board.movePiece('space31', 'space53')

    board
        .getComputerPieces()
        .should('have.length', 11)
    board
        .getPlayerPieces()
        .should('have.length', 10)

    board.restart()

    board
        .getComputerPieces()
        .should('have.length', 12)
    board
        .getPlayerPieces()
        .should('have.length', 12)
  })
})