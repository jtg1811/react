import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numbers) str+="0123456789";
        if(characters) str+="@!#$%^&*(){}[]+=_-~`";
        for (let i = 0; i < length; i++) {
          let randomIndex = Math.floor(Math.random()*str.length + 1)
          pass += str.charAt(randomIndex)
        }
        setPassword(pass)
  },[length,numbers,characters,setPassword])

  useEffect(()=>passwordGenerator(),[length,characters,numbers,passwordGenerator])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className='mx-10 my-10 text-orange-600'><h1>Password Generator</h1></div>
    <div className='w-full h-10 px-16 rounded-md' style={{backgroundColor:"white"}}>
      <div className='px-5'>
        <input 
          type='text' 
          value={password} 
          readOnly 
          ref={passwordRef}
          style={{color:"white", backgroundColor:"black", width:"400px", height:"40px", fontSize:"20px"}} 
/>
        <button className='mx-5' onClick={copyPassword}>copy</button>
      </div>
      <div className='px-5'>
        <input type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label style={{backgroundColor:"black",color:"aqua"}}>Length : {length}</label>
      </div>
      <div className='px-5'>
        <input type='checkbox'
        defaultChecked={numbers}
        onChange={()=>{setNumbers((prev)=>!prev)}}/>
        <label className='mx-3'style={{backgroundColor:"olive",color:"white"}}>numbers</label>
      </div>
        <div className='px-5'>
        <input type='checkbox'
        defaultChecked={characters}
        onChange={()=>{setCharacters((prev)=>!prev)}}/>
        <label className='mx-3'style={{backgroundColor:"olive",color:"white"}}>characters</label>
      </div>
    </div>
    </>
  )
}

export default App
