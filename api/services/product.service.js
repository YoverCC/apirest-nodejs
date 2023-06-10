const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

//const pool = require('../../libs/postgres.pool');

const sequelize = require('../../libs/sequelize');

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
    const newProduct = {
      id: faker.string.uuid(),
      ...data // split operation
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    const query = 'SELECT * FROM tasks';
    //const rta = await this.pool.query(query);
    //const [data, metadata] = await sequelize.query(query);
    const [data] = await sequelize.query(query);
    //return rta.rows;
    return data;
  }

  async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('product not found');
    }
    this.products[index] = changes;
    return this.products[index];
  }

  async updatePartial(id, changes){
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
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
