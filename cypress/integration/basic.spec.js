/// <reference types="cypress" />

describe('Cypress basic', () =>{
    it.only('Visitar uma pagina e verificar o titulo', () =>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().debug().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .title().should('contain', 'Campo')
    })

    it('Encontrar e interagir com um elemento', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //cy.get('#buttonSimple').click()
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')

    });

})