# Donation Frontend

 É uma sistema web desenvolvida com Node.js e React, projetado para gerenciar um sistema de doação, doares e pessoas ou instituições que possuem necessidade, o objetivo é conectar pessoas que precisam de algo com pessoas disposta a doar algo.

 ## Criando o ambiente local ##

 ```bash
npm create vite@latest
```




_____________________________________



 ## Ativando o ambiente local ##

 ### Verificar se o banco de dados (Mysql) está Ativando ###

```bash
 sudo systemctl status mysql
```

### Caso não esteja, rodar o comando abaixo para iniciar ###

```bash
sudo systemctl start mysql
```

### Roda o servidor Node ###

```bash
node --watch "./src/server.js"
```

 ## Realizando migração de banco de dados ##

 ### Remover Migrações e Resetar Banco de Dados Se você quiser começar "do zero": ###

```bash
npx prisma migrate reset
```

 ### Criar uma Nova Migração Após ajustar o modelo no schema.prisma, crie uma nova migração: ###

```bash
npx prisma migrate dev --name alter_field_type
```