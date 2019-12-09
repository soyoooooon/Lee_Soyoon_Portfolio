const express = require('express');
const router = express.Router();
const path = require('path');

const connect = require('../utils/sql');

/* GET home page. */
router.get('/', function(req, res, next) {

  connect.getConnection((err, connection) => {
		if (err) { return console.log(error.message); }

  let query = `SELECT ID,job,feature,extra FROM tbl_bio`;

  connect.query(query, (err, result) => {
    connection.release();
    if (err) { return console.log(err.message);}
    console.log(result);

    
    res.render('index', {bio: result}); 
  });
  });
});


router.get('/info/:target', (req, res) => {
  

  let query = `SELECT * FROM portfolio WHERE id="${req.params.target}"`;

  connect.query(query, (err, result) => {
    // connection.release();
    if (err) { return console.log(err.message);}
    console.log(result);

    
    res.json(result[0]);
  });
});


module.exports = router;
