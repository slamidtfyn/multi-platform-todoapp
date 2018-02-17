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
                .should('have.class', 'mdc-text-field__icon')
                .should('contain', 'send');
        });



        it('Has list of todos with one item', function () {
            cy.get('#todos').children().should('have.length', 1);
        });

        it('Can add one todo-item to list', function () {
            var todo = 'Drink coffee';

            cy.get('#addtodo')
                .type(todo);

            cy.get('#btnaddtodo').click();

            cy.get('#todos')
                .children().last()
                .should('contain', todo)
                .should('have.class', 'mdc-list-item')
                .children().first()
                .should('have.class','btnremovetodo')
                .should('contain','delete');
                

                cy.get('#addtodo').should('have.value','');


        });

        it('Can delete todo-item from list', function () {
            var todo = 'Drink coffee';

            cy.get('#todos')
                .children().first().children().first()
                .should('have.class','btnremovetodo')
                .should('contain','delete')
                .click();

            cy.get('#todos').children().should('have.length', 0);

            cy.get('#addtodo')
                .type(todo);

            cy.get('#btnaddtodo').click();

            cy.get('#todos').children().should('have.length', 1)
                .first().children().first()
                .click();

            cy.get('#todos').children().should('have.length', 0);


        });

    });
});