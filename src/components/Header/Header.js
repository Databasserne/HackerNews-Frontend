import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.renderUserSection = this.renderUserSection.bind(this);
    }

    renderUserSection = () => {
        if (!this.props.isLoggedIn) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a onClick={this.props.logout}>Logout</a>
                    </li>
                </ul>
            );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-hackernews" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="/">HackerNews - {this.props.fullname}</Link>
                    </div>
                    {this.renderUserSection()}
                </div>
            </nav>
        );
    }
}



export default Header;
