import { useState } from "react"
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";

function Form_AddMovie({movieList,setMovieList}){
    const [movieName,setMovieName]=useState("")
    const [moviePoster,setMoviePoster]=useState("")
    const [movieRating,setMovieRating]=useState("")
    const [movieSummary,setMovieSummary]=useState("")
    const [movieTrailer,setMovieTrailer]=useState("")
    
  const postMovies=async(movie)=>{
    let response=await axios.post("https://6695fead0312447373c0a4cf.mockapi.io/Movie",movie)
    console.log(response.data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Form Submission")
    const movie={
            name:movieName,
            poster:moviePoster,
            rating:movieRating,
            summary:movieSummary
        }       
        // console.log(movie)
        postMovies(movie)
  }
  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}
        style={{
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

        <Button variant="outlined"
        type="submit"
            sx={{ margin: "1% 10%",padding:"0.4% 5%"}}
            >Add Movie</Button>

      </form>
      


    </>
)
}
export default Form_AddMovie
// {name: 'BRO', poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:AN…Bmwia-XFXzuNE5YUT_5-6BnzM5rGap9o0SQTomY7ZCff7qp2A', rating: '6.1', summary: 'After meeting with a fatal accident, a young man b… he learns the importance of humility and family.'}