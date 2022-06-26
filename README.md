# Basic CRUD Restful API with express-generator
[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)
<br/> <br/>
this api does a simple CRUD operations on a single table mysql Database .<br/> <br/>
this is build on top off fastest validator and sequelize ORM <br/>

[link to express-generator!](https://github.com/expressjs/generator) <br/>

the api use different HTTP methods ( GET, POST, PUT, and DELETE ) <br>

to make this work correctly you need to :
* you need to have node js <br/>
* you need to have mysql installed in your machine ( install xampp if you don't have ) <br/>
* create a new empty database and call it 'test' <br/><br/>

Clone this repository:
```bash
$ git clone https://github.com/juangsabit/express-generator-api.git
```

Install dependencies:
```bash
$ npm install
```

Migrate using sequelize:
```bash
$ npx sequelize db:migrate
```

______________________________________________________________________________________

Listening and serving HTTP on :3000
* ` GET         /products`                  --> get all products
* ` GET         /products/:id`              --> get single product
* ` POST        /products`                  --> create new product
* ` PUT         /products`                  --> update product
* ` DELETE      /products/:id`              --> delete product

______________________________________________________________________________________

Thank you..~
