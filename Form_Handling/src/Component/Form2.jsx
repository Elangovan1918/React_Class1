import React, { useState } from 'react'

const Form2 = () => {
    let [user,setuser]=useState({
        UserName:"",
        UserEmail:"",
        UserPass:"",
        course:"",
        gender:""
    })
    let [subjects,setsubjects]=useState([])

    let{UserName,UserEmail,UserPass,course,gender}=user;
    
    let handleChange=(e)=>{

        let{name,value}= e.target            //!Important
        setuser({...user ,[name]:value})
    }
    let checkboxhandle=(e)=>{
        let {checked,value}=e.target
        if (checked) {
            setsubjects([...subjects,value])
        }else{
            setsubjects(subjects.filter((sub)=>sub!==value))
        }
        
    }
    let handlesubmit=(e)=>{
        console.log(user,subjects);  //   or     console.log({UserName,UserEmail,UserPass);
        
        
        e.preventDefault()
        setuser({
                UserName: "",
                UserEmail: "",UserPass:"",course:"",gender:""}
        )
        setsubjects([])
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>

            <div className='form-group'>
            <label htmlFor="">UserName: </label>
            <input type="text"placeholder='Name' name='UserName' value={UserName} onChange={handleChange}/>
            </div>

            
            <div>
            <label htmlFor="">UserEmail : </label>
            <input type="text" placeholder='Email' name='UserEmail' value={UserEmail} onChange={handleChange} />
            </div>


            <div>
            <label htmlFor="">Enter The Password : </label>
            <input type="text" name='UserPass' value={UserPass} placeholder='password' onChange={handleChange} />
            </div>


            <div>
            <label htmlFor="">Select The Course</label>
            <select name="course" id=""  onChange={handleChange} value={course}>
                <option >Select One</option>
                <option >Java Full Stack</option>
                <option >Python Full Stack</option>
                <option >Mern Full Stack</option>
            </select>
            </div>

            {/* // To Handle Radio button */}

            <div>
                <label htmlFor="">Select Gender :</label><br />
                <input type="radio" name='gender' value="male" onChange={handleChange}/>Male
                <input type="radio" name='gender' value="female" onChange={handleChange}/>Female
                <input type="radio" name='gender' value="other" onChange={handleChange}/>Other
            </div>

            <div className="form-group">

                {/* How To handle The CheckBox */}
                <label htmlFor="">Select The Subject :</label>
                <input type="checkbox"  name='sub1' value="Java" onChange={checkboxhandle} checked={subjects.includes("Java")}/>Java
                <input type="checkbox"  name='sub2' value="Python" onChange={checkboxhandle} checked={subjects.includes("Python")}/>Python
                <input type="checkbox"  name='sub3' value="JS" onChange={checkboxhandle} checked={subjects.includes("JS")}/>JS

            </div>

            <div className="form-group">
            <button>Submit</button>
            </div>

        </form>
        {/* <h1>{UserName}</h1>
        <h2>{UserEmail}</h2>
        <h3>{UserPass}</h3> */}
    </div>
  )
}

export default Form2