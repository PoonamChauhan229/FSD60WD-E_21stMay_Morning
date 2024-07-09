import { useState } from "react"
import { ColorItem } from "./ColorItem"

export function AddColor(){
    const [colorVal,setcolorVal]=useState("red")
    const [colorList,setColorList]=useState([colorVal])
    // [red,green,blue,yellow]
    // Spread Opertor>> shallow copy of an array> [...colorList]
    console.log(colorList)
    const inputStyle={
        backgroundColor:colorVal,      
        margin:"5px 3px 5px 0px",
        padding:"5px",
    }
    return (
        <>
        <div>
            <input
            style={inputStyle}
            type="text" name="" id="" value={colorVal} 
            onChange={(e)=>setcolorVal(e.target.value)}
            />
            <button 
            style={{padding:"5px",backgroundColor:colorVal,color:"white"}}
            onClick={()=>{
                setColorList([...colorList,colorVal])
                console.log(colorList)
            }}>Add Color</button>

            {
                colorList.map((element,index)=>(<ColorItem color={element} key={index}/>))
            }

        </div>
        </>
    )

}
