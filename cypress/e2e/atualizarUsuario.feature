# language: pt
Funcionalidade: Atualização de usuário
 Cenario: Criação de usuário com sucesso
    Dado que acessei o site de cadastro
    Quando coloco o nome e o email corretos 
    E clico no botão Salvar
    Entao um usuário deve ser criado com sucesso

 Cenario: Atualização de usuário corretamente
    Dado que acessei o site
    E pesquiso pelo nome existente
    Quando clico no botão "Ver Detalhes"
    E clico no botão "Editar"
    E altero o nome e o email
    E clico no botão "Salvar"
    Então um usuário deve ser atualizado com sucesso

 Cenario: Atualização de usuário com um email já existente
    Dado que acessei o site
    E seleciono o primeiro da lista
    Quando clico no botão "Ver Detalhes"
    E clico no botão "Editar"
    E altero o email para um email que já está em uso
    E clico no botão "Salvar"
    Então um erro deve ser exibido