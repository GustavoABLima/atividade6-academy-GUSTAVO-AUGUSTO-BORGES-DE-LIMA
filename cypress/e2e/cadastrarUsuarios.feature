# language: pt
Funcionalidade: Cadastro de Usuários

  Cenario: Cadastro de usuários com sucesso
    Dado que acessei a página de cadastro
    Quando coloco o nome e o email corretos 
    E clico no botão Salvar
    Entao um usuário deve ser criado com sucesso

  Cenario: Cadastro de usuários com erro de email
    Dado que acessei a página de cadastro
    Quando coloco o nome e o email faltando o @ 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com email invalido
    Dado que acessei a página de cadastro
    Quando coloco o nome válido e o email invalido 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com nome faltando
    Dado que acessei a página de cadastro
    Quando coloco o nome faltando e o email 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com email faltando
    Dado que acessei a página de cadastro
    Quando coloco o nome e o email faltando 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com nome com menos de 4 caracteres
    Dado que acessei a página de cadastro
    Quando coloco o nome com menos de 4 caracteres e o email 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com nome com mais de 100 caracteres
    Dado que acessei a página de cadastro
    Quando coloco o nome com mais de 100 caracteres e o email 
    E clico no botão Salvar
    Entao um erro deve ser exibido

  Cenario: Cadastro de usuários com email com mais de 60 caracteres
    Dado que acessei a página de cadastro
    Quando coloco o nome e o email com mais de 60 caracteres 
    E clico no botão Salvar
    Entao um erro deve ser exibido
   