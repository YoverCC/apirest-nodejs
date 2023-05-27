const express = require('express');

const ProductsService = require('../services/product.service');

const router = express.Router();
const service = new ProductsService();

// Con parametros query
router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Todos los endpoints especificos deben ir antes de lo dinamico

// Con parametros "basicos"
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'created',
    data: newProduct
  });
});

// patch - recibe los objetos de forma parcial - actualiza una parte
router.patch('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await service.updatePartial(id, body);
    res.json({
      message: 'update',
      data: product,
      id,
    });
  } catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

// patch - recibe los objetos de forma completa - actualiza todo
router.put('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'update',
      data: product,
      id,
    });
  } catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  } catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;
