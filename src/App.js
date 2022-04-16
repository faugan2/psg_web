import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Faqs from "./screens/Faqs";
import Support from "./screens/Support";
import Home from "./screens/Home";
import Splash from "./screens/Splash";

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
                <Route path="/faqs" exact>
                    <Faqs />
                </Route>
                <Route path="/support" exact>
                    <Support />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
