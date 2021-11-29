import React, { useState } from 'react'
// import './rajasree.css'

const Rajasree = () => {
    const [result,setResult]=useState("");
    return (
        <div className="container">
            <h1>WELCOME</h1>
          <input type="text" onChange={(e)=>{
              setResult(e.target.value)
          }}value={result}/>
          <div className="data">
              {result}
              </div>  
        </div>
    )
}

export default Rajasree
