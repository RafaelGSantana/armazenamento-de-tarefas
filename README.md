# armazenamento-de-tarefas

## Sobre

Trata-se de uma ferramenta para armazenamento de tarefas. A ferramenta foi desenvolvida utilizando o ReactJS no front-end e o Node.js no back-end.
Por se tratar de uma ferramenta para uso pessoal e o objetivo é ser algo simples, optei por utilizar o banco não relacional MongoDB.

## Funcionalidades

Nesta ferramenta é possivel:
  - Registrar uma tarefa, sendo o título e a data que se pretende concluir a tarefa;
  - Atualizar os dados de uma tarefa registrada
  - Excluir tarefas
  - Listar as tarefas registradas no banco de dados

## Executar a aplicação

Para rodar a aplicação no seu computador, você deve:

#### Clonar o repositório.

Para isso, abra o terminal do seu computador e no local de sua preferência, execute o comando abaixo, copiando-o e pressionando "ENTER"
```
  git clone https://github.com/RafaelGSantana/armazenamento-de-tarefas.git
```

Após concluir clonagem do projeto, entre na pasta do projeto, executando no terminal o comando
```
  cd armazenamento-de-tarefas
```

#### Executar o back-end

Após clonar o repositório, execute os seguintes comandos

Para entrar na pasta correspondente ao back-end da aplicação:
```
  cd server 
```

Para instalar as dependências do back-end:
```
  npm install
```

Para rodar o servidor na sua máquina:
```
  npm run dev
```

Com isso o back-end já estará rodando na sua máquina.

#### Executar o front-end

Para executar o front-end da aplicação, navegue até a pasta do projeto "armazenamento-de-tarefas", pelo terminal, e execute os seguintes comandos:

Entrar na pasta correspondente ao front-end:
```
  cd client
```
Para instalar as dependências do front-end:
```
  npm install
```

Para rodar o projeto no seu navegador:
```
  npm run start
```
---

Com o back-end (server) e o front-end (client) rodando, você já pode utilizar e testar as funcionalidades da ferramenta!


Obs.: Deixei o arquivo .env exposto para quem for testar a aplicação, possa testar utilizando o meu banco de dados no MongoDB.




