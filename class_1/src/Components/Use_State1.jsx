import React, { useState } from 'react'

const Use_State1 = () => {
    let [userName,setUserName]=useState("Elango")
    let [userAge,setUSerAge]=useState(22)
    let handle=()=>{
        if (userName==="Elango") {
            setUserName("Selva")
            setUSerAge(20)
        }
        else if(userName==="Selva"){
            setUserName("Elango")
            setUSerAge(22)
        }
        
        
    }
  return (
    <div>
        <h3>User Details</h3>
        <h3>{userName}</h3>

        
        <h3>{userAge}</h3>

        <button onClick={handle}>ChangeUserName</button>
    </div>
  )
}

export default Use_State1