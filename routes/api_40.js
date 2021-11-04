var express = require('express');
var router = express.Router();
const apiCrown2Controller_40 = require('../controllers/apiCrown2Controller_40');

/* crown_xx */
router.get('/category_40', apiCrown2Controller_40.getCategories);
router.get('/shop_40',apiCrown2Controller_40.getShop);
router.get('/shop_40/:category',apiCrown2Controller_40.getProductsByCategory);

/* midproj_xx */

/* finalproj_xx */

module.exports = router;
