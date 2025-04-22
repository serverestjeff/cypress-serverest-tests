# cypress-serverest-tests
# Cypress Serverest Tests

Este repositório contém testes automatizados E2E utilizando o framework Cypress para a aplicação [Serverest](https://serverest.dev/).

## 🔗 Links

- Frontend: [https://front.serverest.dev/](https://front.serverest.dev/)
- Swagger API: [https://serverest.dev/](https://serverest.dev/)

## 📁 Estrutura do Projeto

```
├── cypress.config.js
├── package.json
├── cypress
│   ├── support
│   │   └── commands.js
│   └── e2e
│       ├── frontend
│       │   ├── login.cy.js
│       │   ├── cadastroUsuario.cy.js
│       │   └── carrinho.cy.js
│       └── api
│           ├── loginAPI.cy.js
│           ├── usuariosAPI.cy.js
│           └── produtosAPI.cy.js
```

## ✅ Testes Implementados

### Frontend
- **Login com sucesso**
- **Cadastro de novo usuário**
- **Adição de produto ao carrinho**

### API
- **Login via API com sucesso**
- **Criação de usuário via API**
- **Consulta de produtos via API**

## ▶️ Como Executar

### 1. Clonar o Repositório
```bash
git clone https://github.com/serverestjeff/cypress-serverest-tests.git
cd cypress-serverest-tests
```

### 2. Instalar as Dependências
```bash
npm install
```

### 3. Executar os Testes com Cypress UI
```bash
npx cypress open
```

### 4. Executar os Testes via Terminal
```bash
npx cypress run
```

## 🛠️ Requisitos
- Node.js 16+
- npm 8+

## 📌 Observações
- Utilizado o máximo de comandos nativos do Cypress.
- Boa separação de responsabilidades entre testes frontend e API.
- Token de autenticação armazenado no `localStorage` para testes com carrinho.

---



