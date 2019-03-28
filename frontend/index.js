
$('section.myCarousel .carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.myCarousel .item.active > img').attr('src');
$('section.myCarousel').append('<img src="' + startImage + '">');

$('section.myCarousel .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.myCarousel > img').attr('src',bscn);
});


/*navigation
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}*/




$(function(){
    $('#merci').tooltip();
}) 
 
 
 
 
 //base de donnée
 
 var mysql = require('promise-mysql');
 var session = require('express-session');
const cookieParser = require('cookie-parser')
 
 mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'poissonnerie'
 }).then(function(conn){
 console.log("connexion etablie avec la base de donnée")


 var express = require('express');
 var app = express();

 //utilisation du middlewar
app.use(express.static(`${__dirname}/public/frontend`));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
 
 app.get('/', (req, res) => {
 res.render('hello world')
 });//le routage
 
 
 app.get('/about', (req, res) => {
res.render('index')



 });
     

 // fin de la base de donnée
 
 
 
 
 
 
 
 
 
 
 app.listen(80, ()=>{
 console.log("j'ecoute sur le port 80")
});

 }).catch((error)=>{
   console.log('connexion echoue')
 });






