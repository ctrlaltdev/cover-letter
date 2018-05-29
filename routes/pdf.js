var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.download('./public/pdf/cover.pdf', 'cover.pdf');
});

module.exports = router;