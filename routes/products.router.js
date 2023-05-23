const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

// Con parametros query
router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Todos los endpoints especificos deben ir antes de lo dinamico

// Con parametros "basicos"
router.get('/:id', (req, res) => {
  const { id } = req.params;

  if(id === '999'){
    res.status(404).json({
      message: 'not found'
    });
  } else{
    res.status(200).json({
      id,
      name: 'Product 2',
      price: 2000
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

// patch - recibe los objetos de forma parcial - actualiza una parte
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

// patch - recibe los objetos de forma completa - actualiza todo
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
