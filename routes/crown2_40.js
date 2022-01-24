var express = require('express');
var router = express.Router();
const crown2Controller_40 = require('../controllers/crown_40/crown2Controller_40');

/*CREAT */
router.post('/create',crown2Controller_40.createProducts);

/*READ*/
router.get('/', crown2Controller_40.getCategories);
router.get('/shop_40',crown2Controller_40.getShop);
router.get('/shop_40/:category', crown2Controller_40.getProductsByCategory);

/*UPDATE */
router.post('/update',crown2Controller_40.updateProducts);

/*DELETE */
router.get('/delete/:id',crown2Controller_40.deleteProduct);

module.exports = router;
