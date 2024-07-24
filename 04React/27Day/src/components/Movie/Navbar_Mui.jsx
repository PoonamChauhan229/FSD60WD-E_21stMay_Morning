import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from '../utilis/cartContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector } from 'react-redux';

const pages = ['Home', 'AllMovies',"AddMovie_MUI","AddMovie"];

function Navbar_Mui({mode,setMode}) {
    const cartValue=useContext(cartContext)
    const cartItems=useSelector(store=>store.cart.items)
    console.log(cartItems)
    
    const navigate=useNavigate()
   return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{padding:0,maxHeight:"70px"}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,padding:0,height:"20px",}} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 300,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              padding:0,
              margin:0,
            }}
          >
            LOGO
          </Typography>         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:"flex-end",padding:0,height:"20px" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ mx: 1, color: 'white', display: 'block' ,padding:0,height:"20px",}}
                onClick={()=>{navigate(`/${page.toLowerCase()}`)}}
              >
             {/* <Link to={`/${page}`}>{page}</Link> */}
             {page}
              </Button>
            ))}
            <Button 
            sx={{ mx: 1, color: 'white', display: 'block' ,padding:0,height:"20px",}}
            onClick={()=>{navigate('/tictactoe')}}>TicTacToe</Button>
            <Button>{cartValue}</Button>

            {/* <Button 
             sx={{ mx: 1, color: 'white', display: 'block' ,padding:0,height:"20px"}}
             onClick={()=>{setMode(mode==="light"?"dark":"light")}}
            >{mode==="light"?<><DarkModeIcon/> Dark</>:<><LightModeIcon/> Light</>}</Button> */}

          <Button 
            sx={{ mx: 1, color: 'white', display: 'block' ,padding:0,height:"20px",}}
            onClick={()=>{navigate('/cartPage')}}
           >Redux Cart-{cartItems.length}</Button>


          <Button 
            sx={{ mx: 1, color: 'white', display: 'block' ,padding:0,height:"20px",}}
            onClick={()=>{navigate('/classComponent')}}
           >Class</Button>

            <Button
            // variant="contained"
            sx={{color: 'white'}}
            component="label"               
            startIcon={mode==="light"?<DarkModeIcon/>:<LightModeIcon/>} 
            onClick={()=>{setMode(mode==="light"?"dark":"light")}}>
            {mode==="light"?"dark":"light"}
          </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar_Mui;
