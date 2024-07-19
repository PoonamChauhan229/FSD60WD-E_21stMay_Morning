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
import Navbar_Mui from './components/Movie/Navbar_Mui'
import AddMovie_MUI from './components/Movie/AddMovie_MUI'
import MovieCard_MUI from './components/Movie/MovieCard_MUI'
import cartContext from './components/utilis/cartContext'
import EditMovie from './components/Movie/EditMovie'
import TicTacToe from './components/TicTacToe/TicTacToe'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [movieList,setMovieList]=useState(allmovies)
  const [cartUseCxt,setCartUseCxt]=useState(0)
  const [mode,setMode]=useState('dark')
  const theme = createTheme({
   palette: {
     mode: mode,
   },
 });
  return (
   <ThemeProvider theme={theme}>
      <CssBaseline />
   <cartContext.Provider value={[cartUseCxt,setCartUseCxt]}>
   {/* App.jsx should be neat and tidy */}
   {/* <Navbar> */}
   <Navbar_Mui mode={mode} setMode={setMode}/>
   {/* <MovieCard_MUI/> */}
  <Routes>
   <Route path='/' element={<HomePage/>}/>
    <Route path='/home' element={<HomePage movieList={movieList} setMovieList={setMovieList}/>}/>
    <Route path='/addmovie' element={ <AddMovie movieList={movieList} setMovieList={setMovieList} />}/>
    <Route path='/color' element={ <AddColor/>}/>
    <Route path='/addmovie_mui' element={ <AddMovie_MUI movieList={movieList} setMovieList={setMovieList} />}/>
    
    
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
    <Route path="/edit/:id" element={<EditMovie/>}/>

    <Route path='/tictactoe' element={<TicTacToe/>}/>
     {/* Error Page || Page Not Found Error */}
    
     {/* /7878  to /404  || 10-12 min*/} 
     <Route path='/404' element={<Page404/>}/>
     <Route path='*' element={<Navigate replace to= '/404'/>}/>
        
  
  </Routes>
   </cartContext.Provider>
   </ThemeProvider>
  )
}

export default App
// named  import export >>{}
// default import export >>


