import { useState } from "react"
import Board from "./Board"

function TicTacToe(){
    const [boardVal,setBoardVal]=useState([null,null,null,null,null,null,null,null,null])
    return(
        <>
        <h1>TicTacToe Game Yet to be Launched!!!</h1>
        <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
        </>
    )
}
export default TicTacToe