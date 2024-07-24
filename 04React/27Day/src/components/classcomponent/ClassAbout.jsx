import React from "react";
class ClassAbout extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Dummy Name",
                login:"Dummy Login"
            }
        }
        console.log("Child Constructor called ")
    }
    // componentDidMount
    async componentDidMount(){
        console.log("Child componentDidMount called ")
        const data=await fetch(`https://api.github.com/users/PoonamChauhan229`)
        const res=await data.json()
        // console.log(res)
        this.setState({
            userInfo:{
                name:res.name,
                login:res.login,
                img:res.avatar_url
            }
        })

        this.timer=setInterval(()=>{
            console.log(1000)
        },1000)
    }
    componentDidUpdate(){
        console.log("Child componentDidUpdate called ")
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount called ")
        clearInterval(this.timer)

    }

    render(){
        console.log("Child Render called ")
        return(
            <>
            <h1>ClassAbout</h1>
            <h2>{this.props.name}</h2>
            <h3>{this.state.userInfo.name}</h3>
            <h4>{this.state.userInfo.login}</h4>
            <img src={this.state.userInfo.img} alt="" />
            </>
        )
    }
}

export default ClassAbout