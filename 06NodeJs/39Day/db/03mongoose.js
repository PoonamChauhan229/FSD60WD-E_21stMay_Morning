// movies collection
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/fsd60wd_01_mongoose')
const Movies=mongoose.model('Movies',{
    movieName:{type:String},
    movieSummary:{type:String},
    movieRating:{type:Number,default:5},
    moviePoster:{type:String,lowercase:true},
    movieTrailer:{type:String, lowercase:true}
})

const movieData=new Movies({
    movieName:'RRR02',
    movieSummary:'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    // movieRating:8.8,
    moviePoster:'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
    movieTrailer:'https://www.youtube.com/embed/f_vbAtFSEc0'
})
//movieData.save()
const connection=async()=>{
const res=await movieData.save()
console.log(res,"We are connected to Mongodb....")
}
connection()