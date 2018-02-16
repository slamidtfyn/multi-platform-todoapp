//plain-js tests

describe('todo app test', function () {

    it('.should() - assert that <title> is correct', function () {
        cy.visit(Cypress.env('TODOAPP_URL'));
    
        cy.title().should('include', 'plain-js');
    });
    context('Querying', function () {
        beforeEach(function () {
            cy.visit(Cypress.env('TODOAPP_URL'));
        });

        it('.should() - assert that <title> is correct', function () {

        cy.title().should('include', 'plain-js');
        });


    });
});