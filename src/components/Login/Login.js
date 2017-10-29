import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { username: '', password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidMount() {
        if(this.props.isLoggedIn){
            this.props.history.push("/");
        }
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        console.log("Submit:", this.state.username, this.state.password);
        this.props.history.push("/");
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label label-default">Username</label>
                        <input className="form-control" type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label className="label label-default">Password</label>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </div>
                    <input type="submit" className="btn btn-default" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { isLoggedIn } = state.user;
    return { 
        isLoggedIn 
    };
}

export default connect(mapStateToProps)(Login);
