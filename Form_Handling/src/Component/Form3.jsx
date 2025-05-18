import React, { useState } from 'react'

const Form3 = () => {
   
    let[user,setuser]=useState({uname:"",email:"",age:"",add:"",gender:"",course:""})
    
    let[places,setplaces] = useState([])
    
    let{uname,email,age,add,gender,course}=user
    
    let handlecheckbox=(e)=>{
        let {checked,value}=e.target
        if (checked) {
            setplaces([...places,value])
        }
        else{
            setplaces(places.filter((sub)=>sub!==value))
        }
    }

    let handle=(e)=>{
        let{name,value}=e.target
        setuser ({...user, [name]:value})
       
    }
    let submit=(e)=>{
        console.log(user,places);
        e.preventDefault()
        setuser({uname:"",email:"",age:"",add:"",gender:"",course:""})
        
        setplaces([])
    }
  return (
    <div>
        <form action="" onSubmit={submit}>

        <div className='form-group'>
            
            <label htmlFor="">Enter The Name:</label>
            <input type="text" name='uname' value={uname} onChange={handle} />
        </div>
        <div className='form-group'>
            
            <label htmlFor="">Enter The email:</label>
            <input type="text" name='email' value={email} onChange={handle} />
        </div>
        <div className="form-group">
            <label htmlFor="">Enter The Age :</label>
            <input type="number" name='age' value={age} onChange={handle} />
        </div>
        <div className="form-group">
            <label htmlFor="">Enter The Address : </label>
            <textarea name="add" value={add} onChange={handle} id=""></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="">Select The Gender : </label>
            <input type="radio" name='gender' value='male' onChange={handle}/>Male
            <input type="radio" name='gender' value='female' onChange={handle}/>Female
            <input type="radio" name='gender' value='others' onChange={handle}/>Others
        </div>
        <div className="form-group">
            <label htmlFor="">Select The Course :</label>
            <select name="course" id="" value={course} onChange={handle} >
                <option>Select One </option>
                <option>Java Full Stack</option>
                <option>Python Full Stack</option>
                <option>Mern Full Stack</option>

            </select>
        </div>
        <div className="form-group">
            <label htmlFor="">Select The Place : </label>
            <input type="checkbox" name='sub1' value="Chennai" onChange={handlecheckbox} checked={places.includes('Chennai')} />Chennai
            <input type="checkbox" name='sub2' value="Madurai" onChange={handlecheckbox} checked={places.includes('Madurai')} />Madurai
            <input type="checkbox" name='sub3' value="Bangalore" onChange={handlecheckbox} checked={places.includes('Bangalore')} />Bangalore
        </div>
        <div className="btn">
            <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Form3