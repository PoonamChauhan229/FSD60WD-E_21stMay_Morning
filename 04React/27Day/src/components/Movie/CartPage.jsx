import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clearCart, removeItemLastCart } from "../utilis/cartSlice"
import CartItemPage from "./CartItemPage"

function CartPage(){
    const cartItems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    console.log(cartItems)
    const cartStyle={
        display:"flex",
        gap:"20px",
         flexWrap:"wrap"
    
    }
    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    const handleRemoveLastItem=()=>{
        dispatch(removeItemLastCart())
    }
    return(
        <>
        <h1>Cart Page</h1>
        <Button onClick={()=>handleClearCart()}>Clear Cart</Button>

        <Button onClick={()=>handleRemoveLastItem()}>Remove last Item</Button>


        <div style={cartStyle}>
        {
            cartItems.map((element,index)=><CartItemPage name={element.name} poster={element.poster}
            rating={element.rating} summary={element.summary} key={index} id={element.id} />)
        }
        </div>
        </>
    )
}
export default CartPage