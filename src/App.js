import logo from './logo.svg';
import React from "react";
import Signup  from './Components/Signup'
import Dashboard  from './Components/Dashboard'
import Header  from './Components/Header'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
    
  return (
    <div className="App">
      
       <Router>
           <Header  />
           <Switch>
              <Route exact path="/"  component={Signup} />
              <Route exact path="/dashboard"  component={Dashboard}  />
           </Switch>
       </Router>
        
    </div>
  );
}

export default App;
