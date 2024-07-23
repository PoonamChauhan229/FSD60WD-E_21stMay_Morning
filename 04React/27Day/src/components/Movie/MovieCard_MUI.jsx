import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Counter from './Counter';
import { useContext } from 'react';
import cartContext from '../utilis/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../utilis/cartSlice';
export default function MovieCard_MUI({name,poster,rating,summary,id,setMovieList,element}) {
    const [showSummary,setShowSummary]=useState(true)
    const [heart,setHeart]=useState("primary")
    const navigate=useNavigate()
    const [cartUseCxt,setCartUseCxt]=useContext(cartContext)
    // Redux
    const dispatch=useDispatch()
    const handleAddItem=(element)=>{
      console.log(element)
      dispatch(addItem(element))
    }

    //using fetch > delete
    // const deleteMovie=async(id)=>{
    //   let data = await fetch(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`, {
    //     method: "DELETE",
    //   });
    //   let res = await data.json();
    //   console.log(res);
    //   getMovies()
    // }
    const deleteMovie=async(id)=>{
      let response=await axios.delete(`https://6695fead0312447373c0a4cf.mockapi.io/Movie/${id}`)
      console.log(response.data)
      getMovies()
    }

    //using fetch > get 
  //   const getMovies=async()=>{
  //     let data=await fetch('https://6695fead0312447373c0a4cf.mockapi.io/Movie')
  //     let res=await data.json()
  //     console.log(res)
  //     setMovieList(res)
  // }

  // using axios > get
  const getMovies=async()=>{
    let response=await axios.get('https://6695fead0312447373c0a4cf.mockapi.io/Movie')
    console.log(response.data)
    setMovieList(response.data)
  }
 

  return (
    <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>{navigate(`/movie/${id}`)}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={rating}
      />
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt={name}
      />
     
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={heart}
        onClick={()=>{setHeart("error")}}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>setShowSummary(!showSummary)}>
            {showSummary? <ExpandMoreIcon />:<ExpandLessIcon /> }                  
        </IconButton>
         {/* Like dislike */}
        <Counter/>

        <IconButton color="error"        
        onClick={()=>{
          deleteMovie(id)
        }}>
         <DeleteIcon/>
        </IconButton>

      <IconButton color="primary"
      onClick={()=>{
        navigate(`/edit/${id}`)
      }}>
      <EditAttributesIcon/>
      </IconButton>
      <button
      onClick={()=>{
        setCartUseCxt(cartUseCxt+1)
      }}
      >Addto Cart</button>
      {/*  REdux btn */}
      <button
      onClick={()=>handleAddItem(element)}
      >Add to Redux Cart</button>



        
      </CardActions>
     {
        showSummary &&  <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
     }
     
    </Card>
  );
}

