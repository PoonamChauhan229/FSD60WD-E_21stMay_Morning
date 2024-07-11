import { useState } from 'react'
import './App.css'
import { AddColor } from './components/Color/AddColor'
import AddMovie from './components/Movie/AddMovie'
import MovieDisplay from './components/Movie/MovieDisplay'
import { allmovies } from './components/utilis/movieData'
import Navbar from './components/Navbar'
import {Navigate, Route,Routes} from "react-router-dom";
import HomePage from './components/Movie/HomePage'
import Page404 from './components/Movie/Page404'
import MovieDetails from './components/Movie/MovieDetails'
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
    
       {/* Any website migrating a new link ? Old customers + new customers 
    New customers ?
    Old customers ? millions of users + so incase need to handle with react?
    /films to /allmovies
    {<Navigate replace to '/allmovies'/>}
    */}
    <Route path="/allmovies" element={ <MovieDisplay movieList={movieList}/>}/>
    <Route path='/films' element={<Navigate replace to ='/allmovies'/>}/>
    
    {/* dynamic routing */}
    <Route path="/movie/:id" element={<MovieDetails movieList={movieList}/>}/>
     {/* Error Page || Page Not Found Error */}
    
     {/* /7878  to /404  || 10-12 min*/} 
     <Route path='/404' element={<Page404/>}/>
     <Route path='*' element={<Navigate replace to= '/404'/>}/>
        
  
  </Routes>
   </>
   
    
  )
}

export default App
// named  import export >>{}
// default import export >>


