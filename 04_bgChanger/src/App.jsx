import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div style={{ backgroundColor: color, height: "50vh", width:"50vw", alignItems:"center" }}>
      <div className="flex gap-4 p-4 justify-center">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}

export default App;