import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EditMovie = ()=>{
    const {id}=useParams()
    const [singleMovie,setSingleMovie]=useState("")
   
    console.log(singleMovie)
    // using fetch
  //  const getMovieId=async ()=>{
  //   let data=await fetch(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`)
  //     let res=await data.json()
  //     console.log(res)
  //     setSingleMovie(res)
  //  }

  // using axios 
  const getMovieId=async()=>{
    let response=await axios.get(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`)
    console.log(response.data)
    setSingleMovie(response.data) 
  }

   useEffect(()=>{
        getMovieId()
   },[])
  return (
   <>
   {singleMovie?<EditMovieForm singleMovie={singleMovie} id={id}/>:<p>Loading.....</p>}
   </>
  );
};

export default EditMovie;


const EditMovieForm=({singleMovie,id})=>{
    const navigate=useNavigate()
    const [movieName,setMovieName]=useState(singleMovie.name)
    const [moviePoster,setMoviePoster]=useState(singleMovie.poster)
    const [movieRating,setMovieRating]=useState(singleMovie.rating)
    const [movieSummary,setMovieSummary]=useState(singleMovie.summary)
    const [movieTrailer,setMovieTrailer]=useState(singleMovie.trailer)

    //uisng fetch
    // const updateMovie=async(id,movie)=>{
        
    //     let data = await fetch(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`, {
    //         method: "PUT",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(movie),
    //       });
    //       let res = await data.json();
    //       console.log(res);
    //       navigate('/allmovies')      
    // }
    //using axios
    const updateMovie=async(id,movie)=>{
      let response=await axios.put(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`,movie)
      console.log(response.data)
      navigate('/allmovies')
    }
    return(
        <>
        <Box
          sx={{
            width: 400,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="MovieName"
            id="movieName"
            size="small"
            defaultValue={movieName}
            onChange={(e)=>setMovieName(e.target.value)}
            sx={{ margin: "3%", backgroundColor: "white" }}
          />
  
          <TextField
            fullWidth
            label="MoviePoster"
            id="movieposter"
            size="small"
            defaultValue={moviePoster}
            onChange={(e)=>setMoviePoster(e.target.value)}
            sx={{ margin: "3%", backgroundColor: "white" }}
          />
  
          <TextField
            fullWidth
            label="MovieRating"
            id="movierating"
            size="small"
            defaultValue={movieRating}
            onChange={(e)=>setMovieRating(e.target.value)}
            sx={{ margin: "3%", backgroundColor: "white" }}
          />
  
          <TextField
            fullWidth
            label="MovieSummary"
            id="moviesummary"
            size="small"
            defaultValue={movieSummary}
            onChange={(e)=>setMovieSummary(e.target.value)}
            sx={{ margin: "3%", backgroundColor: "white" }}
          />
  
          <TextField
            fullWidth
            label="MovieTrailer"
            id="movietrailer"
            size="small"
            defaultValue={movieTrailer}
            onChange={(e)=>setMovieTrailer(e.target.value)}
            sx={{ margin: "3%", backgroundColor: "white",borderRadius:"2%" }}
          />
        </Box>
        <Button variant="outlined"
        onClick={()=>{  
            const movie={
                name:movieName,
                poster:moviePoster,
                rating:movieRating,
                summary:movieSummary,
                trailer:movieTrailer
            }       
          updateMovie(id,movie)
      
      }}
        sx={{ margin: "1% 10%",padding:"0.4% 5%"}}
        >Update Movie</Button>
  
  
      </>
    )
}
