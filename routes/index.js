var express = require('express');
var router = express.Router();
var path = require('path');

const connect = require('../utils/sql');

/* GET home page. */
router.get('/', (req, res) => {

  // get the connection via the connection pool, and then run the query -> just one added step
  connect.getConnection((err, connection) => {
  if (err) { return console.log(error.message); }

  let query = `SELECT ID,job,feature,extra FROM tbl_bio`;

  connect.query(query, (err, result) => {
    connection.release(); // send this connection back to the pool 

    if (err) {
      
      return console.log(err.message);
    }

    // console.log(result); 

    // render our page
    res.render('index', {bio: result}); 
  });
});
})

router.get('/info/:target', (req, res) => {
  
  connect.getConnection((err, connection) => {
    if (err) { return console.log(error.message); }

  let query = `SELECT * FROM portfolio WHERE id="${req.params.target}"`;

  connect.query(query, (err, result) => {
    connection.release();
    if (err) { console.log(err); }

    console.log(result);
    
    res.json(result[0]);
  })
});
});

module.exports = router;
