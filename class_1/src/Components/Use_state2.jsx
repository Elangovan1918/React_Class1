import React, { useState } from 'react'

const Use_state2 = () => {
    
    let [user,setuser]=useState({name:"Elango",Age:22,place:"MKP"})
    let {name,Age,place}=user
    let handle=()=>{
        setuser({...user,Age:45})
    }
    return (
    <div>
        <h3>User Object</h3>
        <h3>{name}</h3>
        <h4>{Age} </h4>
        <h5>{place}</h5>
        <button onClick={handle}>Change Details</button>


    </div>
  )
}

export default Use_state2