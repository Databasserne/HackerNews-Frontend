import React from 'react';

import './style.css';

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
                    <a className="navbar-brand" href="">HackerNews</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
