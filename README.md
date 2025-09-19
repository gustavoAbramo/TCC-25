# TCC 25
Projeto TCC 25

# Antes de começar

Verifique se você selecionou a branch desejável para editar.Use o comando abaixo para verificar qual branch você está:
```bash
git branch
```
-----------------------------------------------------------------------------------------------------------------------------------
Caso queira mudar a branch:
```bash
git checkout nome-da-branch
```
-----------------------------------------------------------------------------------------------------------------------------------

No cmd, dentro da pasta backend digite os comandos:

```bash
npm i
```
ou
```bash
npm install
```
pra instalar todas as dependências

```
npx prisma generate
```
para criar a pasta com o client
```
npx prisma migrate dev
```
atualiza as tabelas no banco 

```
npm run dev

```
para rodar o servidor com o nodemon


Configuração do MongoDb:

antes de começar lembre de instalar o compass e o mongodb para rodar o projeto
<h2>1. Abra o MongoDB Compass, depois, clique neste botão:<h2>

<img src="Code/frontend/src/assets/passo-1.png">


<h2>2. Digite no campo name:  `history-stock ` e depois clique no botão verde<h2>

<img src="Code/frontend/src/assets/passo-2.png">

<h2>3. Clique no history-stock e clique no '+' e digite no campo database name: `history-smart-storage ` e no collection name: `historico_estoque`, depois salve<h2>

<img src="Code/frontend/src/assets/passo-2.png">

<h2>Pronto, o MongoDB está pronto<h2>
