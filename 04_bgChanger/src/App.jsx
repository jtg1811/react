import { useState } from "react";
function App() {
  const [color,setColor] = useState("black")
  return (
    <>
    <div className="w-full h-screen items-center justify-center" style={{backgroundColor:color}}>
      <div className="flex flex-1 gap-3">
        <button onClick={()=>{setColor("red")}}>red</button>
        <button onClick={()=>{setColor("blue")}}>blue</button>
        <button onClick={()=>{setColor("yellow")}}>yellow</button>
        <button onClick={()=>{setColor("blue")}}>blue</button>
      </div>
    </div>
    </>
  );
}
export default App