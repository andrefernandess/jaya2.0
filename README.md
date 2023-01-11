<h1 align="center">
  Teste JAYA
</h1>

<h4 align="center">
    Teste JAYA
    📊 Com pendências ✅ 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#wrench-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-executar-o-projeto">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#memo-licença">Licença</a>
</p>

## 💻 Sobre o projeto

🚀
O Projeto foi desenvolvido para fins de teste.


## ⚙️ Funcionalidades

- [x] Cadastro de Boletos
- [x] Listagem de Boletos
- [x] Ver de detalhes de Boleto
- [x] Pagamento de Boletos
- [x] Cancelamento de Boletos
- [x] Cadastro de usuários
- [x] Listagem de os usuários
- [x] Criacao de Sessão
- [x] Autenticação via JWT

---

## 📋 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://docker.com).

### Primeiro Passo

```bash
# Clone este repositório
$ git clone https://github.com/andrefernandess/jaya2.0.git
# Acesse a pasta do projeto no terminal/cmd
$ cd jaia2.0
```

#### 🎲 Rodando o Backend (servidor)

```bash
# Instale as dependências
$ npm install
# Subindo container do banco
$ docker compose up
# Rodando as migracoes
$ npm run typeorm  -- -d src/shared/typeorm/index.ts migration:run
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# O servidor inciará na porta:3000
$ Executar os testes
# Para executar os teste, execute o comando "jest" no terminal
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Tsyringe](https://github.com/microsoft/tsyringe)**
-   **[Typeorm](https://typeorm.io/)**
-   **[JWT](https://jwt.io/introduction)**
-   **[SWAGGER](https://swagger.io/)**

## 🛠 Documentação

Acessar o Swagger da aplicação

-   **[SWAGGER](http://localhost:3000/api-docs/)**

**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[ESlintJS](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**, **[EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   README Template:  **[README-ecoleta](https://github.com/tgmarinho/README-ecoleta/blob/master/README.md)**
-   Teste de API:  **[Postman](https://www.postman.com/)**

---

## Autor

Andre Fernandes
---

## ✒️ Licença

Licença [MIT](./LICENSE).

---
Feito por Andre Fernandes [Entre em contato!](https://www.linkedin.com/in/andrelfernandess//)
