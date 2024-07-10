import { useState } from "react"

function AddMovie({movieList,setMovieList}){
    const [movieName,setMovieName]=useState("")
    const [moviePoster,setMoviePoster]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
return(
    <>
    <h3>Add Movie</h3>
    <input type="text" name="" id="" placeholder="name" value={movieName} onChange={(e)=>setMovieName(e.target.value)}/>
    <br/><br/>
    <input type="text" name="" id="" placeholder="poster" value={moviePoster} onChange={(e)=>setMoviePoster(e.target.value)}/>
    <br/><br/>
    <input type="text" name="" id="" placeholder="rating" value={movieRating} onChange={(e)=>setMovieRating(e.target.value)}/>
    <br/><br/>
    <input type="text" name="" id="" placeholder="summary" value={movieSummary} onChange={(e)=>setMovieSummary(e.target.value)}/>
    <br/><br/>
    <button
    onClick={()=>{
        const movie={
            name:movieName,
            poster:moviePoster,
            rating:movieRating,
            summary:movieSummary
        }
        console.log(movie)
        setMovieList([...movieList,movie])
    }}
    >AddMovie</button>
    <br/><br/>
    </>
)
}
export default AddMovie
// {name: 'BRO', poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:AN…Bmwia-XFXzuNE5YUT_5-6BnzM5rGap9o0SQTomY7ZCff7qp2A', rating: '6.1', summary: 'After meeting with a fatal accident, a young man b… he learns the importance of humility and family.'}