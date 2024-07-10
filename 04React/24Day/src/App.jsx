import { useState } from 'react'
import './App.css'
import { AddColor } from './components/Color/AddColor'
import AddMovie from './components/Movie/AddMovie'
import MovieDisplay from './components/Movie/MovieDisplay'
import { allmovies } from './components/utilis/movieData'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom";
import HomePage from './components/Movie/HomePage'
function App() {
  const [movieList,setMovieList]=useState(allmovies)
  return (
   <>
   {/* App.jsx should be neat and tidy */}
   <Navbar/>
  
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/addmovie' element={ <AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
    <Route path='/color' element={ <AddColor/>}/>
    <Route path="/allmovies" element={ <MovieDisplay movieList={movieList}/>}/>
  </Routes>
   </>
   
    
  )
}

export default App
// named  import export >>{}
// default import export >>


