📌 Mini CRUD Full Stack – Cadastro de Usuários

(Mini Full Stack CRUD – User Management)

🇧🇷 Descrição do Projeto

Este projeto é uma aplicação Full Stack simples para cadastro e gerenciamento de usuários, desenvolvida com React no frontend e Node.js + Express no backend, seguindo o padrão API REST.

O objetivo é demonstrar, na prática, conceitos fundamentais para desenvolvedores nível Júnior, como:

Integração entre frontend e backend

Estrutura básica de uma API REST

Operações CRUD (Create, Read, Update, Delete)

Organização e clareza de código

Boas práticas básicas de UX

🧱 Funcionalidades

Listar usuários cadastrados

Cadastrar novo usuário

Editar nome e email do usuário

Excluir usuário

Buscar usuários por nome ou email

Contador total de usuários

Validações básicas

Feedback visual de loading, sucesso e erro

⚙️ Tecnologias Utilizadas
Backend

Node.js

Express

SQLite

API REST

Frontend

React

React Hooks

Fetch / Axios

JavaScript

CSS simples

📁 Estrutura do Projeto
crud-users
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── database
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── package-lock.json

▶️ Como Rodar o Projeto Localmente
🔧 Backend
cd backend
npm install
npm run dev


Servidor rodando em:

http://localhost:3333

🎨 Frontend
cd frontend
npm install
npm start


Aplicação disponível em:

http://localhost:3000

📡 Endpoints da API
Método	Rota	Descrição
GET	/users	Lista todos os usuários
POST	/users	Cria um novo usuário
PUT	/users/:id	Atualiza um usuário
DELETE	/users/:id	Remove um usuário
🚫 Fora do Escopo

Este projeto não possui:

Autenticação / Login

Controle de permissões

Paginação

Deploy em produção

Estilização avançada

Esses itens foram propositalmente deixados fora para manter o foco em fundamentos de CRUD e API REST.

👀 Objetivo Educacional

Este projeto foi desenvolvido com foco em aprendizado e portfólio, priorizando:

Clareza de código

Separação de responsabilidades

Funcionalidade completa

Simplicidade e organização

🇺🇸 Project Description

This project is a simple Full Stack application for user registration and management, built with React on the frontend and Node.js + Express on the backend, following the REST API pattern.

The goal is to demonstrate core concepts expected from a Junior Developer, such as:

Frontend ↔ Backend integration

Basic REST API structure

CRUD operations

Clean and organized code

Basic UX best practices

🧱 Features

List registered users

Create new users

Edit user name and email

Delete users

Search users by name or email

Total users counter

Basic validations

Loading, success and error feedback

⚙️ Technologies
Backend

Node.js

Express

SQLite

REST API

Frontend

React

React Hooks

Fetch / Axios

JavaScript

Basic CSS

▶️ How to Run Locally
Backend
cd backend
npm install
npm run dev


Backend server:

http://localhost:3333

Frontend
cd frontend
npm install
npm start


Frontend application:

http://localhost:3000

📡 API Endpoints
Method	Route	Description
GET	/users	List all users
POST	/users	Create a new user
PUT	/users/:id	Update a user
DELETE	/users/:id	Delete a user
🎯 Final Notes

This project focuses on fundamentals, avoiding unnecessary complexity, and represents a complete and well-structured Junior-level Full Stack CRUD application.
=======
# mini-crud-fullstack
Mini CRUD Full Stack com React, Node.js, Express e SQLite
