import { useState } from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

const Movie=({name,poster,rating,summary,id})=>{//over the fly destructing
    const navigate=useNavigate()
    //Task:
    // rating greater than 8 >>>green || red : 15 mins
    const ratingStyle={
        // color:"green"
        //ternary operator 
        color:rating>8?"green":"red"
    }
    // console.log(props)
    // const{name,poster,rating,summary}=props
    const [showSummary,setShowSummary]=useState(true)
    return(
        <div className="movieCard">
        <img src={poster} alt="" className="moviePoster"/>
        <h5 className="movieTitle">
            <p>{name}</p>
            <p style={ratingStyle}>{rating}</p>
        </h5>
        <h5 className="icons">
            {/* Icons +buttons */}
            <Counter/>
            <button style={{marginLeft:"10px"}} onClick={()=>setShowSummary(!showSummary)}> 
                {showSummary?"🔽":" 🔼"}
            </button>

            <button style={{marginLeft:"10px"}}
            onClick={()=>{navigate(`/movie/${id}`)}}
            >Info</button>  
                      {/*  Movie Info || Movie Details*/}
        </h5>
        {/* 1st way */}
        {/* conditonal rendering */}
       {/* {showSummary &&  <p className="movieSummary">{summary}</p>} */}

       {/* 2nd way */}
       {/* ternary operator > if else */}
       {
        showSummary?<p className="movieSummary">{summary}</p>:null
       }
        </div>
    )
}
export default Movie;


// const Movie=(props)=>{
//     console.log(props.singleMovie)
//     const{name,poster,rating,summary}=props.singleMovie
//     return(
//         <>
//         <h1>Movie Componenet</h1>
//         <h5>{name}{poster}{rating}{summary}</h5>
//         </>
//     )
// }
// export default Movie;

