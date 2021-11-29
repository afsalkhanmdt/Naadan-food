import React from 'react'
// import "./raeez.css"
import { useState } from 'react'

const Raeez = () => {
    const[input,setInput]=useState(""); 
    const[result,setResult]=useState([]);
    return (
        <div className="container">
            <h1>Raeez</h1>

            <input className="input-area" type="text" onChange={
                (e)=>
                setInput(e.target.value)}
                value={input}
                    />
            
            <button onClick={
                ()=>{setResult(prev=>[...prev,input])
                console.log(result);}

            }
        >
            Add</button>
            <div className="result-section">

               {result.map((value,i)=><div key={i}>{value}</div>)}
            
              
            </div>
        </div>
    )
}

export default Raeez
