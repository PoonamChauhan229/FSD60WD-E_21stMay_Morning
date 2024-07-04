import About from "./About"

function Home(props){//parameter// receiving the props
    console.log(props)
    console.log(props.fname,props.lname)
    return(
        <>
        <h1>Welome to our Home Page,...1st Component</h1>
        <h2>{props.fname} {props.lname} {props.course}</h2>
       
        </>
    )
}
export default Home

//Properties > props 
//parameters and arguments in js
//attribute=value
//props >>> object 