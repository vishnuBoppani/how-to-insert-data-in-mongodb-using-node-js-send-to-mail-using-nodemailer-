var express = require("express");
var app = express();
var request = require("request");
var mysql = require('mysql');
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/gentils";
var http = require("http");
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
//var path = __dirname + '/public/';
var path = __dirname + '/views/';
//var nodemailer = require('nodemailer');
var nodemailer = require('nodemailer');

app.use('/public', express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true })); 

///mongo db-----------------/////////////////////

app.post('/thank-you', function(req, res, next) {
  

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'vishnuboppani07@gmail.com',
           pass: 'vishnu007'
       }
   });
  
  
   const mailOptions = {
    from:'<p>'+req.body.gentil_name+'', // sender address
    to: 'vishnuboppani07@gmail.com', // list of receivers
    subject: 'Gentils organics - Contact Form', // Subject line
    html: '<table style="border: 1px solid red;">'+
    '<tr>'+
    '<td>Name: </td><td>'+req.body.gentil_name+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Mail: </td><td>'+req.body.gentil_email+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Phone: </td><td>'+req.body.gentil_phone+'</td>'+
    '</tr>'+
    '<tr>'+
    '<td>Message: </td><td>'+req.body.gentil_message+'</td>'+
    '</tr>'+
    '</table>'// plain text body
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });


  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gentils");
    var myobj = { 
      name: req.body.gentil_name,
      email: req.body.gentil_email,
      phone: req.body.gentil_phone, 
      address: req.body.gentil_message
     };
    dbo.collection("users2").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });


 
  res.redirect('/thank-you');
  

});



//////////////////////////mongodb/////////////////////
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "mydb2"
});

app.post('/about-us', function(req, res, next) {
  console.log(req.body.gentil_name);
  console.log(req.body.gentil_email);
  console.log(req.body.gentil_phone);
  console.log(req.body.gentil_message);
  con.connect(function(err) {
if (err) throw  err;
console.log("connected");
var sql = "INSERT INTO `customers`(`name`,`email`,`phone`,`address`) VALUES ('"+req.body.gentil_name+"','"+req.body.gentil_email+"','"+req.body.gentil_phone+"','"+req.body.gentil_message+"')";
con.query(sql, function(err, result)  {
 if(err) throw err;
 console.log("table created");
});
});


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'vishnuboppani07@gmail.com',
         pass: 'vishnu007'
     }
 });

// var name = '+'req.body.gentil_name'+';

 const mailOptions = {
  from:'<p>'+req.body.gentil_name+'', // sender address
  to: 'vishnuboppani07@gmail.com', // list of receivers
  subject: 'Gentils organics - Contact Form', // Subject line
  html: '<table style="border: 1px solid red;">'+
  '<tr>'+
  '<td>Name: </td><td>'+req.body.gentil_name+'</td>'+
  '</tr>'+
  '<tr>'+
  '<td>Mail: </td><td>'+req.body.gentil_email+'</td>'+
  '</tr>'+
  '<tr>'+
  '<td>Phone: </td><td>'+req.body.gentil_phone+'</td>'+
  '</tr>'+
  '<tr>'+
  '<td>Message: </td><td>'+req.body.gentil_message+'</td>'+
  '</tr>'+
  '</table>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
  if(err)
    console.log(err)
  else
    console.log(info);
});
//res.render('about-us');
res.redirect('/thank-you');
});






//---------start from here--routes  ------------
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});
router.get("/home",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about-us",function(req,res){
  res.sendFile(path + "about-us.html");
});
router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
router.get("/contact-us",function(req,res){
  res.sendFile(path + "contact-us.html");
});
router.get("/thank-you", function(req,res){
  res.sendFile(path + "thanku.html")
 
 });
 router.get("/quality", function(req,res){
  res.sendFile(path + "quality.html")
 
 });




router.get("/aqua-products-calfyn",function(req,res){
  res.sendFile(path + "aqua-products-calfyn.html");
});
router.get("/aqua-products-softner",function(req,res){
  res.sendFile(path + "aqua-products-softner.html");
});







router.get("/pro-aqua-oxcee-tab",function(req,res){
  res.sendFile(path + "pro-aqua-oxcee-tab.html");
});

app.use("/",router);

//-----------routes end from here------------
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});


router.get("/aqua-products-calfyn",function(req,res){
  res.sendFile(path + "aqua-products-calfyn.html");
});
router.get("/aqua-products-softner",function(req,res){
  res.sendFile(path + "aqua-products-softner.html");
});


router.get("/contact-us",function(req,res){
  res.sendFile(path + "contact-us.html");
});
router.get("/technology",function(req,res){
  res.sendFile(path + "technology.html");
});
router.get("/rnd",function(req,res){
  res.sendFile(path + "rnd.html");
});


router.get("/about-us",function(req,res){
  res.sendFile(path + "about-us.html");
});
router.get("/aqua-products-calfyn",function(req,res){
  res.sendFile(path + "aqua-products-calfyn.html");
});
router.get("/aqua-products-softner",function(req,res){
  res.sendFile(path + "aqua-products-softner.html");
});
router.get("/our-products",function(req,res){
  res.sendFile(path + "our-products.html");
});
router.get("/aqua-products-calfyn",function(req,res){
  res.sendFile(path + "aqua-products-calfyn.html");
});
router.get("/aqua-products-softner",function(req,res){
  res.sendFile(path + "aqua-products-softner.html");
});




app.listen(3000,function(){
  console.log("Live at Port 3000");
});