import './App.css'
import { useState } from 'react'
function App() {

  let [counter,setCounter] = useState(3)

  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => {
    if(counter>=1){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <button onClick={addValue}>inc count</button><br/>
    <label>counter value after inc : {counter} </label><br/>
    <button onClick={removeValue}>dec count</button><br/>
    <label>counter value after dec : {counter} </label><br/>

    </>
  )
}

export default App
