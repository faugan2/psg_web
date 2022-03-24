import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home';
import Splash from './screens/Splash';

function App() {
 
  return (
    <Router>
    <Switch>
      <Route path="/" exact>
       <Splash />
      </Route>
      <Route path="/main" exact>
       <Home />
      </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
