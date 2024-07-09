import './App.css'
import Test from './components/Test'
import Profile from './components/Profile'

function App() {
  const students = [
    {
      nickName: "Yamuna",
      pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg",
    },

    {
      nickName: "Vindya",
      pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
    },

    {
      nickName: "Sushil",
      pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
    },
    {
      nickName: "Bharti",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
    },
    {
      nickName: "Shivam",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
    },
  ];

  return (
   <>
   <Test/>
  
   <div className='App'>
    
    {/* <Profile name={"Preethi"} nickname={"Pree"}/>
    <Profile name={"Aditya"} nickname={"Adi"}/>
    <Profile/> */}

    {
      students.map((element,index)=>(
        <Profile  nickName={element.nickName} image={element.pic}/>
      ))
    }
   </div>
   </>
   
    
  )
}

export default App
//map method
//JSX Javacsript XML
// return only 1 JSX
//<></> React Fragment

// REact > 2 types > class based + functional based componet
//class > stateful component
//function > stateless component
// create folder > Components > ur components/files 


//functional component

