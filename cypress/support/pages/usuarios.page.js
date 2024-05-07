export default class UserPage {
    inputName = '#name'
    inputEmail = '#email'

    buttonSubmit = 'button[type="submit"]'
    buttonVoltar = '[href="/users"]'
    buttonCancelar = 'button[class="sc-lcIPJg ifkIA-D"]'
    buttonProximo = 'button[id="paginacaoProximo"]'
    buttonAnterior = 'button[id="paginacaoVoltar"]'
    
    typeName(name) {
        cy.get(this.inputName).type(name)
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email)
    }

    submit() {
        cy.get(this.buttonSubmit).click()
    }

    voltar() {
        cy.get(this.buttonVoltar).click()
    }   

    cancelar() {
        cy.get(this.buttonCancelar).click()
    }

    proximo() {
        cy.get(this.buttonProximo).click()
    }

    anterior() {
        cy.get(this.buttonAnterior).click()
    }
}