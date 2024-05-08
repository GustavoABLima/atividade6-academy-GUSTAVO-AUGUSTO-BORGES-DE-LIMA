import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import UserPage from "../pages/usuarios.page";

const Button = new UserPage()

Given('que acessei o site de cadastro', function () {
    cy.visit('/novo')
})

Given('que acessei o site', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('coloco o nome e o email corretos', function () {
    Button.typeName('Gustavo A B de Lima')
    Button.typeEmail('gus@qa.com')
})

When('clico no botão "Ver Detalhes"', function () {
    cy.get('#userDataDetalhe').click()
})

And('clico no botão "Salvar"', function () {
    Button.salvar()
})

And('pesquiso pelo nome existente', function () {
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo A B de Lima')
})

And('clico no botão "Editar"', function () {
    Button.editar()
})

And('altero o email para um email que já está em uso', function () {
    cy.get('#userEmail').clear()

    cy.get('#userEmail').type('gustavo@qa.com')
})

And('seleciono o primeiro da lista', function () {
    cy.get('#userData')
})

And('altero o nome e o email', function () {
    cy.get('#userName').clear()
    cy.get('#userEmail').clear()

    cy.get('#userName').type('Gustavo Augusto Borges de Lima')
    cy.get('#userEmail').type('gustavo@qa.com')
})

Then('um usuário deve ser criado com sucesso', function () {
    cy.get('.go3958317564').should('be.visible')
})

Then('um usuário deve ser atualizado com sucesso', function () {
    cy.get('.go2072408551').should('be.visible')
})

Then('um erro deve ser exibido', function () {
    cy.get('.sc-dCFHLb.lmTxRO').should('be.visible')
})

after(() => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo Augusto Borges de Lima')
    cy.get('.sc-fUnMCh.dttKkA').click()
    cy.get('.sc-lcIPJg.eIYdvr').click()
})