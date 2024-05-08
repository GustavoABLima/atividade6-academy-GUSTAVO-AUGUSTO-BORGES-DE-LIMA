import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import UserPage from "../pages/usuarios.page";

const Button = new UserPage()

var userId;

before(function () {
    cy.visit('/novo')
    Button.typeName('Gustavo')
    Button.typeEmail('gus@qa.com')
    Button.submit()
})

before(function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo')
    cy.get('#userDataDetalhe').click()
    cy.get('.sc-dLMFU.Mcjyi').then((id) => {
        userId = id.text()
    })
})

Given('que acessei o site', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('pesquiso pelo nome ou email de um usuário existente', function () {
    cy.get('.sc-gsFSXq.mUpIH').clear
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo')
})

When('pesquiso pelo nome ou email de um usuário inexistente"', function () {
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo Augusto Borges de Lima')
})

When('pesquiso pelo id de um usuário existente', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + userId)
})

When('pesquiso pelo id de um usuário inexistente', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/737bf944-122c-4fec-8f7b-0eda3f2fd5ba')
})

Then('todos os usuários com o nome pesquisado devem ser exibidos', function () {
    cy.intercept('GET', '/api/v1/users').as('getUsers')

    cy.wait('@getUsers')
})

Then('nenhum usuário deve ser exibido', function () {
    cy.intercept('GET', '/api/v1/users').as('getUsers')

    cy.wait('@getUsers')
})

And('uma opção para criar um usuário deve ser exibida', function () {
    cy.get('.sc-bmzYkS.dmSxaj').should('be.visible')
})

Then('o usuário com o id pesquisado será exibido', function () {
    cy.intercept('GET', '/api/v1/users').as('getUsers')

    cy.wait('@getUsers')
})

Then('uma mensagem de "Usuário não encontrado" deve ser exibida', function () {
    cy.get('.sc-dCFHLb.lmTxRO').should('be.visible')
})

after(() => {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo')
    cy.get('.sc-fUnMCh.dttKkA').click()
    cy.get('.sc-lcIPJg.eIYdvr').click()
})