# Introduction
Use this repo if you need to create an website follow mvc architecture in nodejs

Read more: [MVC architecture](https://developer.mozilla.org/en-US/docs/Glossary/MVC), [Sequelize ORM framework](https://sequelize.org/docs/v7), [EJS view engine](https://ejs.co/#docs), [ExpressJS](https://expressjs.com)
# How to clone this repo
1. In root dir, run below command:
   ```
   npm i
   ```

2. Create **_.env_** file in root that has same content in **_.env.example_** file and write your environment data in it.

3. To run it in local:
   ```
   npm start
   ```
# Using
## 1. Create Model and Migration

```
npx sequelize-cli model:generate --name <tableName> --attributes <fieldName>:<datatype>, ..etc
```

### 2. Migration
Concept: Migartion create a table to database
1. Generate Migration
   ```
   npx sequelize-cli migration:generate --name <migrationName>
   ```
2. Runing Migrations
   ```
   npx sequelize-cli db:migrate
   ```
3. Undo Migartions
- Undo most recent migration
   ```
   npx sequelize-cli db:migrate:undo
   ```
- Undo all migrations
   ```
   npx sequelize-cli db:migrate:undo:all
   ```
- Undo specific migration
   ```
   npx sequelize-cli db:migrate:undo:all --to <migrationFile(ex: XXXXX-create-posts.js)>
   ```

### 3. Seeder
Concept: Seeder insert data to table
1. Create Seed
   ```
   npx sequelize-cli seed:generate --name <seederName>
   ```
2. Runing Seeds
   ```
   npx sequelize-cli db:seed:all
   ```
3. Undo seeds
- Undo most recent seed
   ```
   npx sequelize-cli db:seed:undo
   ```

- Undo a specific seed
   ```
   npx sequelize-cli db:seed:undo --seed <seedName>
   ```

- Undo all seeds:
   ```
   npx sequelize-cli db:seed:undo:all
   ```
