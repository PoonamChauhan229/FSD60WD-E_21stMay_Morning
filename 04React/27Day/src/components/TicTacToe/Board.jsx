import { useState } from "react"
import Gamebox from "./Gamebox"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Board=({boardVal,setBoardVal})=>{
    const [isXturn,setisXturn]=useState(true)
    const handleClick=(index)=>{
        console.log(index)
        const boardValCopy=[...boardVal]
        if(boardValCopy[index]==null){
            boardValCopy[index]=isXturn?"X":"O"
            setBoardVal(boardValCopy)
            setisXturn(!isXturn)
        }
    }

        // decideWinner
        const decideWinner=(boardVal)=>{      
        const listItems=[[0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]]
            for(let i=0;i<listItems.length;i++){
                console.log(listItems[i])
                const [a,b,c]=listItems[i]
                console.log(a,b,c)
                //if condition
                if(boardVal[a]!==null && boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c]){
                    console.log("winner")
                    return boardVal[a]
                }
            }
            return null
        }     
       
    
    const winner =decideWinner(boardVal)
    const { width, height } = useWindowSize()
    return(
        <>
        {winner?<Confetti width={width} height={height}/>:null}
        <div className="board">
        {
            boardVal.map((element,index)=><Gamebox key={index} element={element} playerClick={()=>handleClick(index)} index={index}/>)
        }
        </div>
        {winner && <h4>Winner is {winner}</h4>}
        </>
    )
}
export default Board