function CartItemPage({name,poster,rating,summary}){
    const cartItemStyle={
        height:"200px",
        width:"300px",
        border:"1px solid yellow",
        padding:"5px",
       
    }
    return(
        <>
        <div style={cartItemStyle}>
            <h5>{name}</h5>
            <img src={poster} alt="" height={100} width={285}/>
            <h6>{rating}</h6>
            <h6>{summary}</h6>
        </div>
        </>
    )
}
export default CartItemPage