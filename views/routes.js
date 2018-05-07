//---------start from here--routes  ------------
router.get("/",function(req,res){
    res.sendFile(path + "index.html");
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
  router.get("/about-us",function(req,res){
    res.sendFile(path + "about-us.html");
  });
  router.get("/aqua-products-calfyn",function(req,res){
    res.sendFile(path + "aqua-products-calfyn.html");
  });
  router.get("/aqua-products-softner",function(req,res){
    res.sendFile(path + "aqua-products-softner.html");
  });
  app.use("/",router);
  
  //-----------routes end from here------------
  
  
  
  
  
  
  app.listen(3000,function(){
    console.log("Live at Port 3000");
  });
  
  
  var mw = require('./my-middleware.js')
  
  app.use(mw({ option1: '1', option2: '2' }))
  
  
  
  
  var greet = express.Router();
  
  greet.get('/jp', function (req, res) {
    console.log(req.baseUrl); // /greet
    res.send('Konichiwa!');
  });
  
  app.use('/greet', greet); // load the router on '/greet'
  
  
  
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vishnuboppani07@gmail.com',
      pass: 'vishnu123'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'vishnuboppani07@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  app.post('/myaction', function(req, res) {
    res.send('You sent the name "' + req.body.name + '".');
  });
  