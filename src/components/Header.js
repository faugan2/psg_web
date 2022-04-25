import "../styles/header.scss";
import logo from "./img/logo.svg";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
import { auth, db } from "../firebase_file";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { useHistory } from "react-router-dom";

const Header = () => {
    const [open_login, set_open_login] = useState(false);
    const [open_register, set_open_register] = useState(false);
    const [me, set_me] = useState(null);
    const [connected, set_connected] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (auth?.currentUser == null) {
            set_connected(false);
        } else {
            set_connected(true);
        }
    }, [auth]);

    const click = () => {
        set_open_login(true);
        set_open_register(false);
    };
    const click_register = () => {
        set_open_register(true);
        set_open_login(false);
    };
    const close_login = () => {
        set_open_login(false);
    };
    const close_register = () => {
        set_open_register(false);
    };
    return (
        <header className="header navbar navbar-expand-lg navbar-light">
            <div className="container branding-standard">
                <a className="navbar-brand" href="/">
                    <img src={logo} />
                </a>
                <div className="top-navigation">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navsigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {connected == false && (
                        <div className="authentication logged-out">
                            <a
                                className="btn btn-primary btn-md nav-link"
                                onClick={click}
                            >
                                Log In
                            </a>
                        </div>
                    )}

                    {connected == true && (
                        <div className="authentication logged-out logout">
                            <button
                                onClick={(e) => {
                                    auth.signOut();
                                    history.replace("/");
                                }}
                            >
                                <PowerSettingsNewIcon />
                            </button>
                        </div>
                    )}

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li
                                className={`nav-item ${
                                    window.location.pathname === "/subhome" &&
                                    "underline"
                                }`}
                            >
                                <a className="nav-link" href="/subhome">
                                    Play Heads Up
                                </a>
                            </li>
                            <li
                                className={`nav-item ${
                                    window.location.pathname === "/subhome" &&
                                    "underline"
                                }`}
                            >
                                <a className="nav-link" href="/subhome">
                                    Play Sports Booth
                                </a>
                            </li>
                            <li
                                className={`nav-item ${
                                    window.location.pathname === "/about" &&
                                    "underline"
                                }`}
                            >
                                <a className="nav-link" href="/about">
                                    About Us
                                </a>
                            </li>
                            <li
                                className={`nav-item ${
                                    window.location.pathname === "/blog" &&
                                    "underline"
                                }`}
                            >
                                <a className="nav-link" href="#blog/index.html">
                                    Blog
                                </a>
                            </li>
                            <li
                                className={`nav-item ${
                                    window.location.pathname === "/support" &&
                                    "underline"
                                }`}
                            >
                                <a className="nav-link" href="/support">
                                    Support
                                </a>
                            </li>

                            {connected == true && (
                                <li className="nav-item dropdown profile">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={auth?.currentUser?.photoURL}
                                        />
                                    </a>
                                    <div
                                        className="dropdown-menu multi-column columns-1"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <div className="multi-column-dropdown">
                                            <ul>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#nfl-football-pools.html"
                                                    >
                                                        Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#march-madness-pools.html"
                                                    >
                                                        Settings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#march-madness-pools.html"
                                                        onClick={(e) => {
                                                            auth.signOut();
                                                            history.replace(
                                                                "/"
                                                            );
                                                        }}
                                                    >
                                                        Logout
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {open_login == true && (
                <Modal
                    content={<Login click={click_register} />}
                    click={close_login}
                />
            )}

            {open_register == true && (
                <Modal
                    content={<Register click={click} />}
                    click={close_register}
                />
            )}
        </header>
    );
};

export default Header;
