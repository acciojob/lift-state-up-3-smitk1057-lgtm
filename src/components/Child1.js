import React from "react"

 const Child1=({setText})=>{
   
   
   return (
        <div style={{backgroundColor:'brown', height:"150px" , paddingTop:"10px"}}>
          <h2>Child Component 1</h2>
          <button onClick={()=>setText("Option 1")}>Option 1</button>
        </div>
     
     )
 }
 export default Child1