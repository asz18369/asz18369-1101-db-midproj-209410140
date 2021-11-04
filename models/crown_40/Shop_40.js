const db = require('../../utils/database');

const Shop_40 = class Shop_40 {
  constructor(id, name, cat_id,price, remote_url, local_url, ) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  // get all categories
  static async fetchAll() {
    try {
      const results = await db.query(`SELECT * from shop_40`);
      return results.rows;
    } catch (e) {
      console.log('error', e);
    }
  }

  static async fetchByCatId(id){
    const query = {
      text: `select * from shop_40 where cat_id = $1;`,
      values: [id]
    }
    try {
      const results = await db.query(query);
      return results.rows;
    }catch(err){
      console.log(err);
    }
  }
};

// const test = async () => {
//   let results = await Category_xx.fetchAll();
//   console.log('results', JSON.stringify(results.rows));
// }

// test();
module.exports = Shop_40;
