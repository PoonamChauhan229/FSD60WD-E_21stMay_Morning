import { Fragment } from 'react'
import './App.css'
import React from 'react'
import Home from './components/Home'
import About from './components/About'

function App() {

  return (
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
   
    
  )
}

export default App

//JSX Javacsript XML
// return only 1 JSX
//<></> React Fragment

// REact > 2 types > class based + functional based componet
//class > stateful component
//function > stateless component
// create folder > Components > ur components/files 


//functional component

