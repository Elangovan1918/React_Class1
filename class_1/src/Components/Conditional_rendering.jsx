import React from 'react'

const Conditional_rendering = () => {
    let isLoggedin=false
    let greeting=isLoggedin ?<p>Login sucessfully</p>:<p>Please Log in</p>

  return (
    <div>
        {greeting}
    </div>
  )
}

export default Conditional_rendering