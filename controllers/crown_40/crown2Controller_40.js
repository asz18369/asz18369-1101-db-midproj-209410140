const serviceCrown2Controller_40 = require('./serviceCrown2Controller_40');

/* CREATE */
exports.createProducts = async (req,res) =>{
  console.log('body',req.body);
  //res.json('create body received')
  try{
    let results = await serviceCrown2Controller_40.create(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data:{msg:creating success}');
  }catch(err){
    console.log(err);
  }
};

/* READ */
exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_40.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_40/crown2_40', {
      data: results,
      title: 'Crown2_40',
      name: 'YanBo Lin',
      id: `209410740`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_40.getShop();
    res.render('crown_40/products_40', {
      data,
      title: 'All Products',
      name: 'YanBo Lin',
      id: `209410740`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
     const data = await serviceCrown2Controller_40.getProductsByCategory(req.params.category);
     console.log('getProductsByCategory', JSON.stringify(data));
    res.render('crown_40/products_40', {
      data,
      title: req.params.category,
      name: 'YanBo Lin',
      id: `209410740`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}

/* UPDATE */

exports.updateProducts = async (req,res) =>{
  console.log('body',req.body);
  //res.json('create body received')
  try{
    let results = await serviceCrown2Controller_40.update(req.body);
    console.log('results', JSON.stringify(results));
    res.json('data:{msg:updating successful}');
  }catch(err){
       console.log(err);
  }
};
/* DELETE */
exports.deleteProduct = async (req,res)=>{
  console.log('deleteProduct',req.params.id);
  try{
    await serviceCrown2Controller_40.deleteById(req.params.id);
    res.redirect('/crown2_40');
  }catch(err){
    console.log(err);
  }
}