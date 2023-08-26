import { mainPage } from '../pages/mainBoardPage'

export const board = {

    getBoard() {
        return cy.get(mainPage.board)
    },
    getComputerPieces() {
        return cy.get(mainPage.computerPieces)
    },
    getPlayerPieces() {
        return cy.get(mainPage.playerPieces)
    },
    movePiece(from, to) {
        cy.get(`[name="${from}"]`).click()
        cy.get(`[name="${to}"]`).click()
    },
    restart() {
        cy.contains('Restart...').should('exist').click()
    },
}