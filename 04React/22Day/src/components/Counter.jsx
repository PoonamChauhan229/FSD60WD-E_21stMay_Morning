import { useState } from "react"

function Counter(){
    // let like=1
    // let dislike=10
// React will show any in the browser, if u use like
//React State Variable

// useState() > State Managment within the component
// const [state,setState]=useState()
const[like,setLike]=useState(1)
const[dislike,setDislike]=useState(1)
const [btnpress,setBtnpress]=useState(false)// boolean 

    return(
        <>
       <button
       onClick={()=>{
        setLike(like+1)
        setBtnpress(true)
    }}
       >👍{like}</button>
       <button onClick={()=>{
        setDislike(dislike+1)
       }}>👎{dislike}</button>
       {
        // console.log(`Like ${like} Dilike ${dislike}`)
       }
       {/* <div>LikeBtn Pressed</div> */}
       {
        btnpress && <div>LikeBtn Pressed</div>
       }
        </>
    )
}
export default Counter
// Hooks:
// Functions 
// useState()
// const[state,setState]=useState()
// state > initial Value || like =1
// setState > FUnction > responsible for updating ur state
// setState(200)