import { useState } from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
function Counter(){
    
const[like,setLike]=useState(0)
const[dislike,setDislike]=useState(0)
const dislikeStyle={
    color:"red",
    backgroundColor:"navy",
    marginLeft:"10px"
}
    return(
    <>
    {/*  */}
       {/* <button
       style={{color:"blue",backgroundColor:"yellow"}}
       onClick={()=>{
        setLike(like+1)
        }}>👍{like}</button>

       <button 
       style={dislikeStyle}
       onClick={()=>{
        setDislike(dislike+1)
       }}>👎{dislike}</button> */}

        <Stack spacing={2} direction="row">
            <Badge badgeContent={like} color="success"
            onClick={()=>{
                setLike(like+1)}}
            >
                <ThumbUpIcon color="action" />
            </Badge>
            <Badge badgeContent={dislike} color="error"
            onClick={()=>{
                setDislike(dislike+1)
               }}
            >
                <ThumbDownIcon color="action" />
            </Badge>
            </Stack>
      
        </>
    )
}
export default Counter

//Styling in React
// 1st Way > Normal way > App.css
// inline CSS > style={{key:value}} 
  // in another way