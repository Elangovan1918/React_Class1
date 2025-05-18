import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setcount]=useState(0)

  //!No Dependencies use Effect

  // useEffect(()=>{
  //   console.log("This No Dependencies UseEffect");
    
  // })

  //! Empty Dependencies Use Effect

  // useEffect(()=>{
  //   console.log("I am Empty Dependencies Use Effect");
    
  // },[])

  //! state Dependencies Use Effect

  // useEffect(()=>{
  //   console.log("I am State Dependencies Use Effect ");
    
  // },[count])
  //! On Mount CleanUp

  // useEffect(()=>{
  //   console.log("Mounted");
  //   return()=>console.log("Un-Mounted");
    
    
  // },[])

  //! Re-render Clean Up
  // useEffect(()=>{
  //   console.log("Mounted");
  //   return()=>console.log("Un-Mounted");
    
    
  // })
  //! State Counter Clean Up
  useEffect(()=>{
    console.log("Mounted");
    return()=>console.log("Un-Mounted");
    
    
  },[count])
  
  return (
    <>
    Test
    <h3>Count : {count}</h3>
    <button onClick={()=>{setcount(count+1)}}>+</button>
    <button onClick={()=>{if(count!=0){{setcount(count-1)}}}}>-</button>

    {/* <Example/> */}

    {/* <Products/> */}
    {/* <Products1/> */}

    </>
  )
}

export default App