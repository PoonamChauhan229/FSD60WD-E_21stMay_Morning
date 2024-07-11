import { useNavigate, useParams } from "react-router-dom"

const MovieDetails=({movieList})=>{
    const {id}=useParams()
    const navigate=useNavigate()
    const movie=movieList[id]
    console.log(movie)

    return(
        <>
        <h1>Movie Details={id}</h1>
        <h2>{movie.name}</h2>
        <h3>{movie.poster}</h3>
        <h4>{movie.summary}</h4>

        <iframe width="670" height="377" src={movie.trailer} title={movie.name} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <br/>
        <button onClick={()=>{
            navigate('/allmovies')
        }}>Back</button>
    </>
    )
}
export default MovieDetails

// Add movie component >> create an input box for trailer and submit {name,poster,summary,trailer}