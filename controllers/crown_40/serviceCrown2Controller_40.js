const Category_40 = require('../../models/crown_40/Category_40');
const Shop_40 = require('../../models/crown_40/Shop_40');

// CREATE
exports.create =async(body)=>{
  try {
    return await Shop_40.create(body);
  }catch(err){
    console.log('create',err)
  }
}
// READ
exports.getCategories = async (req, res) => {
  try {
    return await Category_40.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_40.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
}

exports.getProductsByCategory = async (category) => {
   console.log('service', category);
   
   try {
    const cid = await Category_40.fetchCatIdByName(category);
    const results = await Shop_40.fetchByCatId(cid);
    // console.log('sevv getProductsByCategory', JSON.stringify(results));
    return results;
   } catch(err){
     console.log(err);
   }

}
// UPDATE
exports.update =async(body)=>{
  try {
    return await Shop_40.updateById(body);
  }catch(err){
    console.log('update',err)
  }
}

//DELETE
exports.deleteById = async(id)=>{
  try{
    return await Shop_40.deleteById(id);
  }catch(err){
    console.log(err)
  }
}