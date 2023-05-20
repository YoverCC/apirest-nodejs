const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000
  })
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('No hay parametros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
 const { categoryId, productId } = req.params;
 res.json({
  categoryId,
  productId
})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
