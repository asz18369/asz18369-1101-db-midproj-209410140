var express = require('express');
var router = express.Router();
const crown2Controller_40 = require('../controllers/crown_40/crown2Controller_40');

/* GET home page. */
router.get('/', crown2Controller_40.getCategories);
router.get('/shop_40',crown2Controller_40.getShop);
router.get('/shop_40/:category', crown2Controller_40.getProductsByCategory);

module.exports = router;
