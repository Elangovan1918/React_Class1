import React from 'react'
import Hello from './Components/Hello'
import Hi from './Components/Hi'
import Bye from './Components/Bye'

const App = () => {
  return (
    <div>
      <UserProvider>
        <Hello/>
        <Hi/>
        <Bye/>
      </UserProvider>
    </div>
  )
}

export default App