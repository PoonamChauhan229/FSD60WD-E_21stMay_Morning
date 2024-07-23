import { createSlice } from '@reduxjs/toolkit'
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        // actionItem:()=>{}reducer function
        addItem:(state,action)=>{
            // logic to modify the state
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItemLastCart:(state)=>{
            state.items.pop()
        }
    }
})
export const{addItem,clearCart,removeItemLastCart}=cartSlice.actions
export default cartSlice.reducer