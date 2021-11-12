import {useState} from 'react'
import{Link} from 'react-router-dom'

const AddComponent = () => {


    const[count,setCount]=useState(0);
    return (
          <>       
    
     <div className="count_button"
     onClick={
      ()=>{
        setCount(count-1);
      }
    }
    >
       -
     </div>
     <div className="count_value">
       {count}

     </div>
     <div className="count_button"
     onClick={
       ()=>{
         setCount(count+1);
       }
     }
     >
     +
     </div> 
     <Link to="/" >Multiplication</Link> 
  
       </>
    );
} 
        

export default AddComponent
