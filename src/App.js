import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Faqs from "./screens/Faqs";
import Support from "./screens/Support";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Splash from "./screens/Splash";
import SubHome from "./screens/SubHome";
import Advertise from "./screens/Advertise";

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
                <Route path="/contact" exact>
                    <Contact />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/subhome" exact>
                    <SubHome />
                </Route>
                <Route path="/advertise" exact>
                    <Advertise />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
