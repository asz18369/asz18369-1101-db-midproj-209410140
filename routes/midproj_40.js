var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('midproj_40', {
    title: 'Express',
    name: '陳至賢',
    id: ` 209410140 `,
  });
});

module.exports = router;