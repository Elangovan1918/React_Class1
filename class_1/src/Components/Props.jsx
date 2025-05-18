import React from 'react'

const Props = (props) => {
  return (
    <div className='t'>
        <table>
        <tr><th>Name</th>
        <th>Age</th>
        <th>Place</th>
        <th>IsMarried</th>
        </tr>
        <tr><td>{props.name}</td> 
        <td>{props.age}</td> 
        <td>{props.Place}</td> 
        <td>{props.isMarried?"Yes":"No"}</td></tr>
        <tr><td>{props.name}</td> 
        <td>{props.age}</td> 
        <td>{props.Place}</td> 
        <td>{props.isMarried?"Yes":"No"}</td></tr>
        <tr><td>{props.name}</td> 
        <td>{props.age}</td> 
        <td>{props.Place}</td> 
        <td>{props.isMarried?"Yes":"No"}</td></tr>
        
            
        </table>
    </div>
  )
}

export default Props