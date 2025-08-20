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
