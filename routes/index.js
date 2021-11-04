var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'HELLO',
    name: '陳至賢',
    id: '123456789',
  });
});

module.exports = router;
