import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

const loginButton = () => {
    return (
        <Link to="/login">Login</Link>
    );
}

const Header = () => {
    return (
        <nav className="navbar navbar-default navbar-hackernews">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">HackerNews</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>{loginButton()}</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
