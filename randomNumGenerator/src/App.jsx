import { useState } from 'react'
import './App.css'
function App() {
  const [number, setNumber] = useState(0)
  function generate(){
    let result = Math.floor((Math.random()*100)+1)
    setNumber(result)
  }
  return (
    <>
    <h1>hello</h1>
    <button id='btn' style={{backgroundColor:"blue", color:"beige"}} onClick={generate}>click</button>
    <p id = 'para'>{number}</p>
    </>
  )
}

export default App
