import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    if(counter>=1){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <button onClick={addvalue}>add value</button><br/>
    <label>count value after inc: {counter}</label><br/>
    <button onClick={removeValue}>remove value</button><br/>
    <label>count value after dec: {counter}</label>
    </>
  )
}

export default App
