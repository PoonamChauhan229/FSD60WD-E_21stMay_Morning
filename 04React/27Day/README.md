function Home(){
    return(
        <>
        
        </>
    )
}
export default Home

Structure of React App/ Folder Structure
Create Component
Default import export
Props passing
Using Array.map()
Hooks > useState()
Conditional Rendering
1 way >  && operator

useEffect Hook:
import {useEffect} from 'react'
const getMovies=async()=>{}
dependancy array:
useEffect(()=>{})                >> Without Dependancy array- Going render to again & again
useEffect(()=>{},[])             >> With Dependancy array - Page Loads in browser > Render > initial Render
useEffect(()=>{},["changeInVal"])>> With Dependancy array + item >> Initial Render + item change >> Rerender