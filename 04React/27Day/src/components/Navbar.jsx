import {Link} from "react-router-dom";
const Navbar=()=>{
    const navStyle={
        display:"flex",
        justifyContent:"end",
        gap:"10px",
        backgroundColor:"black",
        color:"orange",
        padding:"7px"
    }
    const linkStyle={
        color:"orange",
        textDecoration:"none"
    }
    return(
        <>
            <div style={navStyle}>
            <div><Link to='/'  style={linkStyle}>Home</Link></div>            
            <div><Link to='/color'  style={linkStyle}>Color Game</Link></div>        
            <div><Link to="/allmovies" style={linkStyle}>AllMovies</Link></div>            
            <div><Link to='/addmovie'>Add Movie</Link></div>
        </div>
        </>
    )
}
export default Navbar