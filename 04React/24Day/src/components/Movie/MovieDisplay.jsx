import Movie from "./Movie";

const MovieDisplay=(props)=>{
    // Destructing 
    const {movie}=props 
    console.log(movie)
    return(
        <div className="App">
        {
            // movie.map((element,index)=><Movie singleMovie={element}/>)
            movie.map((element,index)=><Movie name={element.name} poster={element.poster}
            rating={element.rating} summary={element.summary} key={index}/>)
        }
        
        </div>
    )
}
export default MovieDisplay;