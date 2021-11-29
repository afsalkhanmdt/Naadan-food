import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Learn from "./Learn";
import CreateUser from "./CreateUser";
import Login from "./Login";
import Geethu from "./Geethu";
import Raeez from "./Raeez";
import Faslu from "./Faslu";
import Rajasree from "./Rajasree";
import Async from "./JS/Async";
import Grid from "./CSS/Grid";

const App = ()=> {
  return(
    <Router>
      <Switch>
        <Route path="/css/grid" component={Grid}/> 
        <Route path="/js/async" component={Async}/> 
        <Route path="/rajasree" component={Rajasree}/>  
        <Route path="/faslu" component={Faslu}/>
        <Route path="/raeez" component={Raeez}/>
        <Route path="/geethu" component={Geethu}/>
        <Route path="/learn/user" component={Learn}/>
        <Route path="/learn/login" component={Login}/>
        <Route path="/learn" component={CreateUser}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}

export default App;