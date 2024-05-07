# language: pt
Funcionalidade: Lista de Usuários

 Cenario: Lista de usuários
    Dado que acessei o site
    Quando o site for carregado
    Entao uma lista com 6 usuários deve ser exibida

 Cenario: Lista de usuários vazia
    Dado que acessei o site
    Quando o site carregar
    Entao uma lista vazia deve ser exibida

 Cenario: Próxima página de usuários
    Dado que acessei o site
    E existem pelo menos 7 usuários cadastrados
    Quando pressiono o botão "Próxima"
    Entao deve ser exibida a próxima página de usuários

 Cenario: Anterior página de usuários
    Dado que acessei o site
    E existem pelo menos 7 usuários cadastrados
    E estou na página de usuários 2
    Quando pressiono o botão "Anterior"
    Entao deve ser exibida a primeira página de usuários