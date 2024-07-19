import { useEffect, useState } from "react";
import Movie from "./Movie";
import MovieCard_MUI from "./MovieCard_MUI";
import axios from "axios";

const MovieDisplay=()=>{
    // Destructing 
    // const {movieList}=props 
    // console.log(movieList)
    const [movieList,setMovieList]=useState([])

    // using fetch
    // const getMovies=async()=>{
    //     let data=await fetch('https://6695fead0312447373c0a4cf.mockapi.io/Movie')
    //     let res=await data.json()
    //     console.log(res)
    //     setMovieList(res)
    // }

    // using axios
    const getMovies=async()=>{
       let response=await axios.get('https://6695fead0312447373c0a4cf.mockapi.io/Movie')
       console.log(response.data)
       setMovieList(response.data) 
    }

    useEffect(()=>{
        getMovies()
    },[])
 
    return(
        <div className="App">
        {
            // movie.map((element,index)=><Movie singleMovie={element}/>)
            // movieList.map((element,index)=><Movie name={element.name} poster={element.poster}
            // rating={element.rating} summary={element.summary} key={index} id={index}/>)

            movieList.map((element,index)=><MovieCard_MUI name={element.name} poster={element.poster}
            rating={element.rating} summary={element.summary} key={index} id={element.id} setMovieList={setMovieList}/>)
        }
        
        </div>
    )
}
export default MovieDisplay;