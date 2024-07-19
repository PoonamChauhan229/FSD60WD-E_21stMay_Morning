import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react"
import axios from "axios";
const AddMovie_MUI = ({movieList,setMovieList})=>{
    const [movieName,setMovieName]=useState("")
    const [moviePoster,setMoviePoster]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
    const [movieTrailer,setMovieTrailer]=useState("")
    // adding movies using fetch
  //   const postMovies=async(movie)=>{
  //     console.log(movie)
  //     let data = await fetch("https://6695fead0312447373c0a4cf.mockapi.io/Movie", {
  //         method: "POST",
  //         headers: { "content-type": "application/json" },
  //         body: JSON.stringify(movie),
  //       });
  //       let res = await data.json();
  //       console.log(res);
  // }
  // adding movies using axios
  const postMovies=async(movie)=>{
    let response=await axios.post("https://6695fead0312447373c0a4cf.mockapi.io/Movie",movie)
    console.log(response.data)
  }

  return (
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
            summary:movieSummary
        }
        // console.log(movie)
        // setMovieList([...movieList,movie])
        // console.log(movieList)
        postMovies(movie)
    }}
      sx={{ margin: "1% 10%",padding:"0.4% 5%"}}
      >Add Movie</Button>


    </>
  );
};

export default AddMovie_MUI;
