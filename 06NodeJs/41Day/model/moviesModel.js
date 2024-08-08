const mongoose=require('mongoose')
const moviesSchema=new mongoose.Schema({
    movieName:{type:String},
    movieSummary:{type:String},
    movieRating:{type:Number,default:5},
    moviePoster:{type:String,lowercase:true},
    movieTrailer:{type:String, lowercase:true}
})
const Movies=mongoose.model('Movies',moviesSchema)
module.exports=Movies
