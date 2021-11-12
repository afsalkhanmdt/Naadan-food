import {useState} from 'react';
import './App.css';
import Heading from './Heading';
import ProductComponent from './ProductComponent'
import AddComponent from './AddComponent'
import{
  BrowserRouter as Router,Switch,Routes,Route,Link}
  from "react-router-dom";



function App() {
  
  
  
  return ( 
    <div className="App">
    <Router>
      <Routes>
      <Route path="/multi" element={<AddComponent/>}/>
      <Route path="/" element={<ProductComponent/>}/>
    </Routes>
    </Router>
</div>
  );
} 

      

export default App;
