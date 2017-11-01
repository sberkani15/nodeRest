var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    create_date:{
        type: Date,
        default:Date.now
    }
}
    
)

var Genre = module.exports = mongoose.model ('Genre', genreSchema);
module.exports.getGenres = function(callback, limmit){
    Genre.find(callback).limit(limmit);

}

module.exports.addGenre = function(genre,callback){
    Genre.create(genre,callback);

}