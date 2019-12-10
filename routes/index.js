const express = require('express');
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
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

router.post('/send', (req,res) => {
  connect.getConnection((err, connection) => {
		if (err) { return console.log(error.message); }

  let query = `SELECT ID,job,feature,extra FROM tbl_bio`;

  connect.query(query, (err, result) => {
    connection.release();
    if (err) { return console.log(err.message);}
    console.log(result);

    
    res.render('send', {bio: result}); 
  });
  });


  const output = `
  <h1>You have a new message from your website!</h1>
  <h3>Contact details</h3>
  <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Message: ${req.body.message}</li>
  </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'soyoon.ca@gmail.com',
          pass: 'thisisforU'
      }
  });

  let mailOptions = {
      from: '"Portfolio website" <connect@soyoon.com>',
      to: "hong3su3@gmail.com",
      subject: "Message from portfolio website",
      html: output 
  };
  

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error,info) => {
      if(error){
          console.log(error);
      }
      //Else do something to show successful sent;


    // res.render('send',{bio: result}); 
       
  });
});



module.exports = router;
