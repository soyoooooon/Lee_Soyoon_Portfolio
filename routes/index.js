var express = require('express');
var router = express.Router();
var path = require('path');

const sql = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {

  let query = "SELECT ID,job,feature,extra FROM tbl_bio";


  sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err); }

    res.render('index', { bio: result });

  })
});

router.get('/info/:target', (req, res) => {

  let query = `SELECT * FROM portfolio WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) { console.log(err); }

    console.log(result);
    res.render('layout');
    res.json(result[0]);
  })
  
});

module.exports = router;
