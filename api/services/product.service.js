const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

//const pool = require('../../libs/postgres.pool');

const { models } = require('../../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
    //this.pool = pool;
    //this.pool.on('error', (err) => console.error(err));
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push(
      {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(){
    const products = await models.Product.findAll({
      include: ['category']
    });
    return products;
    ;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes){
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  /*async updatePartial(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes // persiste la info de antes y se ajusta la nueva
    };
    return this.products[index];
  }*/ // version anterior sin conexion a una  BD

  async delete(id){
    const product = await this.findOne(id);
    await product.destroy();
    return{ id };
  }

}

module.exports = ProductsService;
