# Desafio Full Stack

Esse desafio foi muito interessante, a proposta que trago com esse projeto é a da produtuvidade e performance alinhada ao cumprimento dos requisitos.

## Rodar localmente.
### API
`
docker-compose up
`

### Web
`
yarn start
`

## Tecnologias e conceitos utilizados

### Backend.
- Node.js
  - Express
  - TypeScript
  - Docker
  - Typeorm
  - Class-validator
  - Postgres
  - Jest
  - Tsyringe (injeção de dependências)
  - Jsonwebtoken
  - Bcrypt

### Frontend:
  - React.js
    - @Unform/core (Unform foi utilizado para melhorar a performance da aplicação)
    - @Unform/web
    - Axios
    - History
    - React-router-dom
    - React-spring
    - Styled-components
    - Yup

### Conceitos:
  - TDD (Test Driven Development)
  - DDD (Domain Driven Design)
  - **S****O****L**I**D**
    - SRP : Se deu com o isolamento das funcionalidades de cada bloco, módulo, classe ou função.
    - OCP : Para se modificar alguma das funcionalidades simplesmente criaria uma nova implementação para tal coisa, não violando o princípio.
    - LSP : Proporcionado pelo DIP, se eu quisesse trocar alguma das tecnologias apenas implementaria a interface que a aplicação continuará funcionando.
    - DIP : TODA a camada de infra apenas depende de uma abstração, assim como a camada de dominío.
  - Flux
    - A arquitetura foi utilizada no front end para o gerenciamento de sessão.


## API rotas

### Criação de um novo usuário

Rota:
`/user
`

Modelo de requisição:
```json
{
	"name": "Eduardo",
	"surname": "Meireles",
	"email": "e@e.com",
	"password": "123456",
	"phone": "4999999999"
}
```

Resposta: 201
```json
{
  "status": "success",
  "data": {
    "name": "Eduardo",
    "surname": "Meireles",
    "email": "e@e.com",
    "phone": "4999999999",
    "id": 1,
  }
}
```

### Criação de sessão

Rota:
`/session`

Modelo de requisição:
```json
{
	"email": "e@e.com",
	"password" : "123456"
}
```

Resposta: 200
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "name": "Eduardo",
      "surname": "Meireles",
      "email": "e@e.com",
      "phone": "49985017161",
    },
    "token": {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzUyMzc2LCJleHAiOjE2MDA1MjUxNzZ9.wioT2DD5EEP_qMHcw7oEjWCFW3rSpAeg1e6YHDHiEfQ",
      "exp": 1600525176
    }
  }
}
```

## Telas

### Cadastro
![tela_cadastro](https://user-images.githubusercontent.com/37454606/93495315-5f1a1c00-f8e4-11ea-9562-1e0f1d77bf90.png)

### Cadastro Mobile
![tela_cadastro_mobile](https://user-images.githubusercontent.com/37454606/93495677-c33ce000-f8e4-11ea-91a4-c4f4a8f8911f.png)

### Login
![tela_login](https://user-images.githubusercontent.com/37454606/93496028-2169c300-f8e5-11ea-820e-dd0c3d73e98d.png)

### Login Mobile
![tela_login_mobile](https://user-images.githubusercontent.com/37454606/93496361-7c031f00-f8e5-11ea-87e7-390839ebf3d4.png)

## Ações e Toasts

### Cadastro

![cadatro_process](https://user-images.githubusercontent.com/37454606/93497460-d2bd2880-f8e6-11ea-8fcc-600a6c88d618.gif)

### Validações

As validações foram feitas utilizando Yup em conjunto com a biblioteca Unform.
![Validacao_process](https://user-images.githubusercontent.com/37454606/93497827-4828f900-f8e7-11ea-99cb-9092a479e626.gif)

Eduardo Rampon Meireles, 17 de setembro de 2020.



