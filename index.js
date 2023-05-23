const express = require('express');
//const { faker } = require('@faker-js/faker');
const routerApi = require('./routes');

const app = express();
const port = 3001;

app.use(express.json()); // Middleware que permite recibir informacion de tipo json

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app); // Se modulariza las rutas

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


/* // Con parametros query
app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Todos los endpoints especificos deben ir antes de lo dinamico

// Con parametros "basicos"
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
}); */

/* app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');
  }
}); */

/* app.get('/categories/:categoryId/products/:productId', (req, res) => {
 const { categoryId, productId } = req.params;
 res.json({
  categoryId,
  productId
})
}); */
