import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Home'element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
         

        </Routes>
        
      </BrowserRouter>
      
    </div>
    
  )
}

export default App