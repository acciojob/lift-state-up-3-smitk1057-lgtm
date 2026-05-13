
import React from "react";
import './../styles/App.css';
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";
const App = () => {
   const [Text, setText] = useState('')
  return (
    <div style={{backgroundColor:"green",height:"100vh", paddingTop:"30px" , paddingLeft:"20px"}}>
      <h1>Parent Component</h1>
        <Child1 setText={setText}/>
        <Child2 setText={setText} />
        <p>Selected Option: {Text}</p>
     </div>
  )
}

export default App
