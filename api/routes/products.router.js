const express = require('express');

const ProductsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema } = require('../schemas/product.scheme');

const router = express.Router();
const service = new ProductsService();

// Con parametros query
router.get(
  '/', validatorHandler(queryProductSchema, 'query'),
    async (req, res, next) => {
      try {
        const products = await service.find(req.query);
        res.json(products);
      } catch (error) {
        next(error);
      }
    }
);

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Todos los endpoints especificos deben ir antes de lo dinamico

// Con parametros "basicos"
router.get('/:id',
  validatorHandler(getProductSchema, 'params'), // se coloca el middleware previo
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    }catch(error){
      next(error); // explicitamente se le dice que ejecute los middleware de tipo error que tengamos
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// patch - recibe los objetos de forma parcial - actualiza una parte
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
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
      next(error);
    }
  }
);

// patch - recibe los objetos de forma completa - actualiza todo
router.put('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
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
  }
);

router.delete('/:id',
  async (req, res) => {
    try{
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch(error){
      res.status(404).json({
        message: error.message
      });
    }
  }
);

module.exports = router;
