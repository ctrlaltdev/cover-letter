var express = require('express');
var router = express.Router();

function formatDate(date) {
  return date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}

let date = formatDate(new Date());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cover Letter', date: date });
});

module.exports = router;