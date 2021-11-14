const serviceFenderController_40 = require('./serviceFenderController_40');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceFenderController_40.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_40/crown2_40', {
      data: results,
      title: 'midproj_40',
      name: 'YanBo Lin',
      id: `209410740`,
    });
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};