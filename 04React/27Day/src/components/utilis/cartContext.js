import {createContext} from 'react'

const cartContext=createContext()

export default cartContext;


// create Context
// Providing the Context in the App.jsx 
// Create UseState Variable and pass in value as a prop\
// Use this Context > useContext Hooks >  const cartValue=useContext(cartContext)
// Modify the value >  const [cartUseCxt,setCartUseCxt]=useContext(cartContext)

// Youtube
// Publish  > createContext()
// Subscribe
// Pub > Sub