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

export default function MovieCard_MUI({name,poster,rating,summary,id}) {
    const [showSummary,setShowSummary]=useState(true)
    const [heart,setHeart]=useState("primary")
    const navigate=useNavigate()
    const [cartUseCxt,setCartUseCxt]=useContext(cartContext)

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

      <button
      onClick={()=>{
        setCartUseCxt(cartUseCxt+1)
      }}
      >Addto Cart</button>

        
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

