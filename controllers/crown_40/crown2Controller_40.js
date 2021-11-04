const serviceCrown2Controller_40 = require('./serviceCrown2Controller_40');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_40.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_40/crown2_40', {
      data: results,
      title: 'Crown2_40',
      name: '陳至賢',
      id: `209410140`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try{
    const data = await serviceCrown2Controller_40.getShop();
    res.render('crown_40/products_40',{
      data,
      title: 'All Products',
      name: '陳至賢',
      id: `209410140`,
    });
  } catch (err) {
    res.status(404).json(err);
  }
}

exports.getProductsByCategory = async (req,res) => {
  console.log('category',req.params.category)
  try {
    const data = await serviceCrown2Controller_40.getProductsByCategory(req.params.category);
    //console.log('getProductsByCategory',JSON,stringify(data))
    res.render('crown_40/products_40',{
      data,
      title: req.params.category,
      name: '陳至賢',
      id: `209410140`,
    });
  } catch (err){
    res.status(404).json(err);
  }
}