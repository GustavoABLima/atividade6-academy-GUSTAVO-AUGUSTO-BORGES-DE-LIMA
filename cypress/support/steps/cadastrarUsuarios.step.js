import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import UserPage from "../pages/usuarios.page";
import {faker} from '@faker-js/faker'

const cadastroPage = new UserPage()

Given('que acessei a página de cadastro', function () {
    cy.visit('/novo')
})

When('coloco o nome e o email corretos', function () {
    cadastroPage.typeName(faker.person.fullName().replace('-').replace("'"))
    cadastroPage.typeEmail(faker.internet.email())
})

And('clico no botão Salvar', function () {
    cadastroPage.submit()
})

Then('um usuário deve ser criado com sucesso', function () {
    cy.get('.go3958317564').should('be.visible')
})

When('coloco o nome e o email faltando o @', function () {
    cadastroPage.typeName(faker.person.fullName())
    cadastroPage.typeEmail(faker.internet.email().split('@')[0] + '.com')
})

Then('um erro deve ser exibido', function () {
    cy.get('.sc-cPiKLX.feFrSQ').should('be.visible')
})

When('coloco o nome válido e o email invalido', function () {
    cadastroPage.typeName(faker.person.fullName())
    cadastroPage.typeEmail(faker.name.firstName())
})

When('coloco o nome faltando e o email', function () {
    cadastroPage.typeEmail(faker.internet.email())
})

When('coloco o nome e o email faltando', function () {
    cadastroPage.typeName(faker.person.fullName())
})

When('coloco o nome com menos de 4 caracteres e o email', function () {
    cadastroPage.typeName(faker.person.fullName().substring(0, 3))
    cadastroPage.typeEmail(faker.internet.email())
})

When('coloco o nome com mais de 100 caracteres e o email', function () {
    cadastroPage.typeName('uahsijnasijauhshaskluhuwkdkasjhdkwuajshduwajshdkuwajshduhwjahsduwhkajhsduwkhajshdkuwhajhsduwkajshduwajsduwakjshdukhakjhsuidoiqpiwoiekhjkasbncvheiujdf')
    cadastroPage.typeEmail(faker.internet.email())
})

When('coloco o nome e o email com mais de 60 caracteres', function () {
    cadastroPage.typeName(faker.person.fullName())
    cadastroPage.typeEmail('aoiurehntgknmjhbjnfhjpkohserkjfopasoikerklmlkjoipawpljfkoljhjepjkldikpjiehjrfkashbjkolhbouj@qa.com')
})