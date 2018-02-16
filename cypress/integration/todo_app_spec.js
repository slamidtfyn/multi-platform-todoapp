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

        it('Has input field with send button', function () {
            cy.get('#addtodo')
            .should('have.value', '')
            .should('have.class', 'mdc-text-field__input')
            .next()
            .should('have.class','mdc-text-field__icon')
            .should('contain','send');
          });
    });
});