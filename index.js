var express = require('express');
app = express();
mongoose = require('mongoose');
bodyParser = require ('body-parser');


Genre = require('./models/genres');
Book = require('./models/books');


mongoose.connect('mongodb://localhost/bookstore');

var db= mongoose.connection;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/', function(req, res){

    res.send('coucou tout le monde');

    console.log('hello every body');

})




app.get('/api/genres', function(req, res){
    Genre.getGenres(function(err, genres){
        if (err){
            throw err;
        }
        res.json(genres)
    })
})



app.post('/api/genres', function(req, res){
    var genre=req.body;
    Genre.addGenre(genre,function(err, genre){
        if (err){
            throw err;
        }
        res.json(genre)
    })
})


app.get('/api/books', function(req, res){
    Book.getBooks(function(err, books){
        if (err){
            throw err;
        }
        res.json(books)
    })
})


app.get('/api/books/:_id', function(req, res){
    Book.getBookById(req.params._id,function(err, book){
        if (err){
            throw err;
        }
        res.json(book);
    })
})







app.listen(3000);
console.log( 'app listenning on port 3000');