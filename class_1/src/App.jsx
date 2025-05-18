import React from 'react'
import Header from './Components/Header'
import './Apps.css'
import Conditional_rendering from './Components/Conditional_rendering'
import List from './Components/List'
import Props from './Components/Props'
import Prop_child from './Components/Prop_child'
import Use_state from './Components/Use_state'
import Use_State1 from './Components/Use_State1'
import Use_state2 from './Components/Use_state2'

const App = () => {
  let items_a={id:1,name:"Elango",place:"MKP"}
  let customcss="code"
  return (
    <>This React first class
    {/* <Header/> */}
    {/* //! JavaScript Expression */}
    {/* <p className={customcss} style={{fontSize:"32px"}}>{6+9}</p> */}
      {/* <Hi/> */}
      {/* <Conditional_rendering/> */}
      {/* <List/> */}
      {/* <Props name="elango" age={22} Place="MKP" isMarried={true}/>
      <Props name="Selva" age={21} Place="MKP" isMarried={true}/>
      <Props name="Siva" age={19} Place="MKP" isMarried={false}/> */}
      {/* <Prop_child>
        <p>This child prop 1</p>
        <p>this chid prop 1</p>
      </Prop_child> */}
      {/* <Prop_child/> */}


      {/* <Use_state/> */}

      {/* <Use_State1/> */}
      <Use_state2/>
   
    </>
  )
}

export default App