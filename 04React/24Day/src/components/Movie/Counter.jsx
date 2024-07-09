import { useState } from "react"

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
       <button
       style={{color:"blue",backgroundColor:"yellow"}}
       onClick={()=>{
        setLike(like+1)
        }}>👍{like}</button>

       <button 
       style={dislikeStyle}
       onClick={()=>{
        setDislike(dislike+1)
       }}>👎{dislike}</button>
      
        </>
    )
}
export default Counter

//Styling in React
// 1st Way > Normal way > App.css
// inline CSS > style={{key:value}} 
  // in another way