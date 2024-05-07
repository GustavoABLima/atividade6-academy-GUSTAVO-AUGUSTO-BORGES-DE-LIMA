import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import UserPage from "../pages/usuarios.page";

const Button = new UserPage()

Given('que acessei o site', function () {
    cy.visit('/')
})
When('o site for carregado', function () {
    cy.intercept('GET', '/api/v1/users').as('getUsers')

    cy.wait('@getUsers')
})

Then('uma lista com 6 usuários deve ser exibida', function () {
    cy.get('#listaUsuarios').children().should('have.length', 6)

})

When('o site carregar', function () {
    cy.intercept('GET', '/api/v1/users', {body : []}).as('getUsers')

    cy.wait('@getUsers')
})    

Then('uma lista vazia deve ser exibida', function () {
    cy.get('#listaUsuarios').should('have.length', 0)
})

And('existem pelo menos 7 usuários cadastrados', function () {
    cy.intercept('GET', '/api/v1/users').as('getUsers')

    cy.wait('@getUsers')
})

When('pressiono o botão "Próxima"', function () {
    cy.get('#paginacaoProximo').should('be.enabled')
    
    Button.proximo()
})

Then('deve ser exibida a próxima página de usuários', function () {
    cy.get('#paginacaoAtual').then($element => {
        const text = $element.text()
        const [currentPage, totalPages] = text.split(' de ').map(text => parseInt(text.trim()))

        expect(currentPage).to.equal(2)
    })
})

And('estou na página de usuários 2', function () {
    Button.proximo()

    cy.get('#paginacaoAtual').then($element => {
        const text = $element.text()
        const [currentPage, totalPages] = text.split(' de ').map(text => parseInt(text.trim()))

        expect(currentPage).to.equal(2)
    })
})

When('pressiono o botão "Anterior"', function () {
    cy.get('#paginacaoVoltar').should('be.enabled')

    Button.anterior()
})

Then('deve ser exibida a primeira página de usuários', function () {
    cy.get('#paginacaoAtual').then($element => {
        const text = $element.text()
        const [currentPage, totalPages] = text.split(' de ').map(text => parseInt(text.trim()))

        expect(currentPage).to.equal(1)
    })
})