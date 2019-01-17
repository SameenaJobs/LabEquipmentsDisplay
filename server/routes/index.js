var express = require('express');
var router = express.Router();
var con = require('./../db/db.js');

/* GET home page. */
router.get('/equipments', function(req, res, next) {
  con.query("SELECT * FROM equipments_table", function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));
  });
  
});

module.exports = router;