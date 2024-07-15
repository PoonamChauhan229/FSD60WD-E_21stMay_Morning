import Movie from "./Movie";
import MovieCard_MUI from "./MovieCard_MUI";

const MovieDisplay=(props)=>{
    // Destructing 
    const {movieList}=props 
    console.log(movieList)
    return(
        <div className="App">
        {
            // movie.map((element,index)=><Movie singleMovie={element}/>)
            // movieList.map((element,index)=><Movie name={element.name} poster={element.poster}
            // rating={element.rating} summary={element.summary} key={index} id={index}/>)

            movieList.map((element,index)=><MovieCard_MUI name={element.name} poster={element.poster}
            rating={element.rating} summary={element.summary} key={index} id={index}/>)
        }
        
        </div>
    )
}
export default MovieDisplay;