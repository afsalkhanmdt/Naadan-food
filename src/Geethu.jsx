import React from 'react'
 import { useState } from 'react/cjs/react.development'
//  import './geethu.css'

const Geethu = () => {
    const [result,setResult]=useState(0);
    const [firstNumber,setFirstNumber]=useState("");
    const [secondNumber,setSecondNumber]=useState("");
    return (
        <div className="container">
            <h1>Geethu</h1>
            {/* <div className="number-section"> */}
                <div className="number-container">
            Number1<input type="number"
            onChange={(e)=>{
                setFirstNumber(e.target.value);
            }} value={firstNumber} />
             Number2<input type="number"
               onChange={(e)=>{
                setSecondNumber(e.target.value);
            }} value={secondNumber} />
             </div>
          {/* </div> */}
            <button
            onClick={()=>{
                setResult(Number(firstNumber)+Number(secondNumber));
            }}>ADD</button>
            <div className="result-section">{result}</div>
        </div>
    )
}

export default Geethu
