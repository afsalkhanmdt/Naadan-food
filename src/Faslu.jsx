import React from 'react'
// import './faslu.css'
import { useState } from 'react'
const personsList=[{
    name:"Raeez",
    age:23,    
},
{
    name:"sathar",
    age:25,
},
{
    name:"Zafar",
    age:1,
},
{
    name:"Abeed",
    age:1,
},
{
    name:"Faslu",
    age:25,
}]
const Faslu = () => {
    const [list,setList]=useState(personsList)
    return (
        <div className="container">
            <h1>Faslu</h1>
            {list.map(({name,age},i)=>
            <div key={i} className="list-section">
                    <div>{name}</div>
                    <div>{age}</div>
                    <button onClick={()=>{
                          setList(list.filter((_value,index)=>{
                              return i!==index
                          }))
                    }}>Close</button>
                </div>
                
            )}
        </div>
    )
}

export default Faslu
