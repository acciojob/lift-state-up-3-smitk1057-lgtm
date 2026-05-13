import React from "react"


const Child2 = ({setText})=>{
  
  
  return (
        <div style={{backgroundColor:"yellow",height:"150px" ,paddingTop:"10px"}}>
          <h2>Child Component 2</h2>
          <button onClick={()=>setText("Option 2")}>Option 2</button>
          
        </div>
    )
}
export default Child2   