import React, { useState } from "react";
import How from "../How";

let Bye=()=>{
    let  [isHide,setisHide]=useState("true")
    let arr = [
        {id:1, name:"item1", description : "this is item1"},
        {id : 2,name: "item2", description: "this is item2"},
        {id : 3,name: "item3", description: "this is item3"}
    ]
    let Hide=()=>{
        setisHide(!isHide)
        console.log(!isHide)

    }
    arr.map((arr,index) =>{
        return(
            <li key={index}>
                <b>{arr.name}</b>
                
            </li>
        )
    })
   
    return(
        <div>
            <h1>This Is Bye</h1>
            <button onClick={Hide} >
                {
                isHide ? "show how component " : " hide show component"
                }
                </button>

                {
                    isHide && <How/>
                }
            
        </div>
    )
}
export default Bye