import "../styles/splash.scss";
import { useState, useEffect } from "react";
import { auth, db } from "../firebase_file";
import { useHistory } from "react-router-dom";
const Splash = () => {
    const history = useHistory();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user == null) {
                history.replace("/main");
            } else {
                //load information from redux
                history.replace("/main");
            }
        });
    }, [auth]);
    return <div className="splash">splash</div>;
};

export default Splash;
