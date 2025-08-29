import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App" flex justify-center items-center>
        <h1>01react</h1>
        <h1>lets chart-with-dev</h1>
        <h2>hay , buddy i am tecoritham learning react</h2>
      </div>
    </>
  );
}

export default App;
