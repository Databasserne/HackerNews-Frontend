import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './style.css';



class Header extends Component {
    constructor(props) {
        super(props);

        this.loginButton = this.loginButton.bind(this);
    }

    loginButton = () => {
        if(!this.props.isLoggedIn){
            return (
                <Link to="/login">Login</Link>
            );
        } else {
            return (
                <Link to="/">Logout</Link>
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
                        <Link className="navbar-brand" to="/">HackerNews</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>{this.loginButton()}</li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.user;
    return { 
        isLoggedIn 
    };
}

export default connect(mapStateToProps)(Header);
