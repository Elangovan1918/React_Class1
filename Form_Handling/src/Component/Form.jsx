import React from 'react'
import { useState } from 'react'


const Form = () => {
    let [name,setname]=useState("")
  let [email,setemail]=useState("")

  let changename=(e)=>{
    setname(e.target.value)
  }
  let changeemail=(e)=>{
    setemail(e.target.value)
  }
  let submit=(e)=>{
    console.log({name,email});
    e.preventDefault()
    setemail("")
    setname("")
    
  }

  return (
    <div className='divp'>
    <form action="" onSubmit={submit}>
     <div className='divc'>
       <label htmlFor="">Enter The Name: </label>
       <input type="text" placeholder='Enter The Name ' value={name} onChange={changename}/>
     </div>

     <div className='divc'>
       <label htmlFor="">Enter The Email: </label>
       <input type="text" placeholder='Enter The Email ' value={email} onChange={changeemail}/>
     </div>
     <div>
       <button>Submit</button>
     </div>
    </form>
    <h1>{name}</h1>
    <h2>{email}</h2>
   </div>
  )
}

export default Form