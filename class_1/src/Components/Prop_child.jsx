import React from 'react'
import List from './List'


const Prop_child = (props) => {
  let {items_a}=props
  let place=["MKP","ILLUPPUR","CHENNAI","TPJ"]
  return (
    <div>
      
      {/* {props.children} */}
    <h2>Items List</h2>
    <ul>
      {
        place.map((ele)=>{
          return(<li>{ele}</li>)
        })
      }
    </ul>
    </div>
  )
}

export default Prop_child