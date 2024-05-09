# language: pt
@pesquisa
Funcionalidade: Pesquisa de Usuário

 Cenario: Pesquisa de usuário
     Dado que acessei o site
     Quando pesquiso pelo nome ou email de um usuário existente
     Então todos os usuários com o nome pesquisado devem ser exibidos

 Cenario: Pesquisa de usuário pelo nome para saber o id
     Dado que acessei o site
     Quando pesquiso pelo nome de um usuário existente
     E clico no botão "Ver Detalhes" para saber o id
     Então o id do usuário com o nome pesquisado será exibido

 Cenario: Pesquisa de usuário inexistente
     Dado que acessei o site
     Quando pesquiso pelo nome ou email de um usuário inexistente
     Então nenhum usuário deve ser exibido
     E uma opção para criar um usuário deve ser exibida

 Cenario: Pesquisa de usuário pelo id
     Dado que acessei o site
     Quando pesquiso pelo id de um usuário existente
     Então os dados do usuário com o nome pesquisado será exibido

 Cenario: Pesquisa de usuário por id inexistente
     Dado que acessei o site
     Quando pesquiso pelo id de um usuário inexistente
     Então uma mensagem de "Usuário não encontrado" deve ser exibida
