import React from "react"
import ClassAbout from "./ClassAbout"

class Classprofile extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor called ")
        this.state={
            count:0,
            count1:1
        }
    }
    componentDidMount(){
        console.log("Parent componentDidMount called ")
    }
    render(){
        console.log("Parent Render called ")
        return(
            <>
                <h1>Class Profile </h1>
                <button onClick={()=>{
                    this.setState({
                      count: this.state.count+1,
                      count1: this.state.count1+1, 
                    })
                }}>IncreMent</button>
                 <button onClick={()=>{
                    this.setState({
                      count: this.state.count-1,
                      count1: this.state.count1-1, 
                    })
                }}>Dcrement</button>
                <h2>{this.state.count}</h2>
                <h3>{this.state.count1}</h3>

              <ClassAbout name={"First Child"}/>
              {/* <ClassAbout name={"Second Child"}/> */}
            </>
        )
    }
}
export default Classprofile


// export function Classprofile(){
//     return(
//         <>
//             <h1>Block of code </h1>
//         </>
//     )
// }