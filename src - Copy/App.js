import {useState} from 'react';
import './App.css';
import Heading from './Heading';
import ProductComponent from './ProductComponent'
import AddComponent from './AddComponent'
import{
  BrowserRouter as Router,Switch,Route,Link}
  from "react-router-dom";



function App() {
  
  
  
  return ( 
    <div className="App">
    <Router>
      <switch>
        <Route path="/multi">
          <ProductComponent/>
        </Route>

      <Route path="/posts" component={Posts}/>
      <Route path="/" component={AddComponent}/>
      </switch>
    </Router>
</div>
  );
} 

      

export default App;
