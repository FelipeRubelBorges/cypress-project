///<reference types="cypress" />

describe('Work with basic elements', () => {

    it('Texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.get('body')
           .should('contain', 'Cuidado');

        cy.get('span')
          .should('contain', 'Cuidado');

        cy.get('.facilAchar')
          .should('contain', 'Cuidado');

        cy.get('.facilAchar')
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...');

        
    });

    it.only('Links', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html');

        cy.get('[href="#"]')
          .click()

        cy.get('#resultado')
          .should('have.text','Voltou!')
        
        cy.reload()
        cy.get('#resultado')
        .should('have.text','Status: Nao cadastrado')

        cy.get('[href="#"]')
          .click()
        cy.get('#resultado')
          .should('have.text','Voltou!')


    });

})

