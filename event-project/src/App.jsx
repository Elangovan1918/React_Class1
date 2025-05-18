import React from 'react'
import Hello from './Compoent/Hello'
import Hi from './Compoent/Hi'
import Bye from './Compoent/Bye'
// import './App.css'

// const App=()=>{
  

//   let hi=()=>{
//     alert("hi function")
//   }

//   let hello =(uname)=>{
//     alert (`hello  ${uname}  am the func`)
//   }
//   return(

// <div>

//   <button onClick={()=>{hello("elangovan")}}>click</button>

//   <button onClick={()=>hi()}> another button</button>

//   <button onClick={hi}>click for hi</button>
// </div>


//   )
// }

// export default App



let App=()=>{
  return(
    <div>
      <Hello/>
      <Bye/>
      <Hi/>
    </div>

  )
}
export default App