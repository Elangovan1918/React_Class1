import React, { useState } from 'react'

const Use_state = () => {
    let [cart,setcart]=useState(0)
    let set =()=>{
        setcart(cart+1)
    }
    let remove=()=>{
        if (cart!=0) {
            setcart(cart-1)
        }
        
    }
  return (
    <>
    <h3>no of items in cart : {cart}</h3>
    <button onClick={set}>Add Cart</button>
    <button onClick={remove}>Remove Cart</button>
    </>
  )
}

export default Use_state