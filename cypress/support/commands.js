// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (login, password) => {
  cy.contains('Log in').click();
  if (login) {
    cy.get('#mail').type(login);
  }
  if (password) {
    cy.get('#pass').type(password);
  }
  cy.contains('Submit').click();
});

Cypress.Commands.add('addBook', (title, description, coverPath, filePath, author, favorite) => {
  cy.contains('Add new').click();
  cy.get('#title').type(title);
  cy.get('#description').type(description);
  cy.get('#fileCover').selectFile(coverPath, { action: 'drag-drop' });
  cy.get('#fileBook').selectFile(filePath, { action: 'drag-drop' });
  cy.get('#authors').type(author);
  if (favorite) {
    cy.get('.form-check-label').dblclick();
  }
  cy.contains('Submit').click();
});
