import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const[count,setCount] = useState(0)
  function handleClick(){
    setCount(count+1)
  }
  // useEffect(()=>{
  //   alert('run on every render')
  // })
  //   useEffect(()=>{
  //   alert('run on first render')
  // },[])
  //     useEffect(()=>{
  //   alert('run when count changes')
  useEffect(()=>{
    alert('run on first render')
  },[])

  return (
    <>
    <button onClick={handleClick}>count</button><br/><br/>
    <label>count : {count}</label>
    </>
  )
}

export default App
