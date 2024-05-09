import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import UserPage from "../pages/usuarios.page";

const Button = new UserPage()

var userId;

before({ tags: '@pesquisa' }, () => {
    cy.visit('/novo')

    Button.typeName('Gustavo Augusto Borges de Lima')
    Button.typeEmail('gus@qa.com')

    Button.submit()

    cy.get('.go3958317564').should('be.visible')
})

Given('que acessei o site', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users')
})

When('pesquiso pelo nome ou email de um usuário existente', function () {
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo')
})

When('pesquiso pelo nome ou email de um usuário inexistente', function () {
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo A B de Lima')
})

When('pesquiso pelo id de um usuário existente', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/' + userId)
})

When('pesquiso pelo id de um usuário inexistente', function () {
    cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/1711ef9e-e139-44ac-b50a-171b3f07c8ce')
})

When('pesquiso pelo nome de um usuário existente', function () {
    cy.get('.sc-gsFSXq.mUpIH').type('Gustavo Augusto Borges de Lima')
})

Then('todos os usuários com o nome pesquisado devem ser exibidos', function () {
    cy.get('#listaUsuarios').should('be.visible')
})

Then('nenhum usuário deve ser exibido', function () {
    cy.get('.sc-koXPp.csBRDe').should('be.visible')
})

Then('os dados do usuário com o nome pesquisado será exibido', function () {
    cy.get('[id="id"]').should('be.visible')
})

Then('uma mensagem de "Usuário não encontrado" deve ser exibida', function () {
    cy.get('.sc-dCFHLb.lmTxRO').should('be.visible')
})

Then('o id do usuário com o nome pesquisado será exibido', function () {
    cy.get('.sc-dLMFU.Mcjyi').should('be.visible')
})

And('uma opção para criar um usuário deve ser exibida', function () {
    cy.get('.sc-bmzYkS.dmSxaj').should('be.visible')
})

And('clico no botão "Ver Detalhes" para saber o id', function () {
    cy.get('#userDataDetalhe').click()

    cy.get('[name="id"]').invoke('val').then((id) => {
        this.id = userId
    })
})
