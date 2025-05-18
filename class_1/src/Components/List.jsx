import React from 'react'

const List = (props) => {

    let items=["Item 1","Item 2","Item 3","Item 4"]
    let list=["Elango","Selva","Siva","Gokul"]
    let place=["mkp","csk","mi","tpj"]
  return (
    <div>
        <ul>
            {
              place.map((items,index)=>{
                return(<li>{items}</li>)
              })
            }
        </ul>
        
        {/* <ul>{list.map((list,index)=>(<li key={index}>{list}</li>))}</ul>
        <ul>{place.map((place,index)=>(<li key={index}>{place}</li>))}</ul> */}
    </div>
  )
}

export default List