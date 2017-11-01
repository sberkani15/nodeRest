var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },

    description:{
        type:String
    },

    author:{
        type:String,
        require:true
    },

    publisher:{
        type:String,
        require:true
    },

    pages:{
        type:Number
    },

    image_url:{
        type:String
    },

    create_date:{
        type: Date,
        default:Date.now
    }
}
    
)

var Book = module.exports = mongoose.model ('Book', bookSchema);
module.exports.getBooks = function(callback, limmit){
    Book.find(callback).limit(limmit);

}


module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);

}