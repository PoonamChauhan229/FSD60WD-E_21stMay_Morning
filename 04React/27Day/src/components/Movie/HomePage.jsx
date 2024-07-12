import React from 'react'
import AddMovie_MUI from './AddMovie_MUI'
import Navbar_Mui from './Navbar_Mui'

const HomePage = ({movieList,setMovieList}) => {
  return (
    <div>
      HomePage
      {/* <Navbar_Mui/> */}
      <AddMovie_MUI movieList={movieList} setMovieList={setMovieList}/>
    </div>
  )
}

export default HomePage