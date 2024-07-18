const Gamebox=({element,playerClick,index})=>{
   return(
    <>
    <div className="gamebox"
    onClick={()=>playerClick()}
    >{element}</div>
</>
   )
}
export default Gamebox