import React from 'react'
import Home from './Home'
import About from './About'

const Test = () => {
  return (
   <>
    <React.Fragment>
      
      <h1>Hello World from React</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, doloribus.</p>
      {console.log("Just Started React")}
      {/* Calling the home component, args > attribute=value */}
      {/* Passing the Props */}
      <Home  fname={"Guvi"} lname={"Geek"}/>
      <Home  fname={"Poonam"} lname={"Chauhan"} course={"React"}/>
      {/* 
      <Home></Home>
      {Home()} */}
      <About/>
    </React.Fragment>
   </>
  )
}

export default Test