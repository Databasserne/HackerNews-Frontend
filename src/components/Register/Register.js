import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { fullName: '', username: '', password: '', repeatPassword: '' };

        this.handleChangeFullname = this.handleChangeFullname.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
    }

    handleChangeFullname(event) {
        this.setState({ fullName: event.target.value });
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleChangeRepeatPassword(event) {
        this.setState({ repeatPassword: event.target.value });
    }

    handleSubmit(event) {
        const { fullName, username, password, repeatPassword } = this.state;
        console.log("Submit:", username, password);

        this.props.login(username, password);

        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label label-default">Full name</label>
                        <input className="form-control" type="text" value={this.state.fullName} onChange={this.handleChangeFullname} />
                    </div>
                    <div className="form-group">
                        <label className="label label-default">Username</label>
                        <input className="form-control" type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label className="label label-default">Password</label>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </div>
                    <div className="form-group">
                        <label className="label label-default">Repeat Password</label>
                        <input className="form-control" type="password" value={this.state.repeatPassword} onChange={this.handleChangeRepeatPassword} />
                    </div>
                    <input type="submit" className="btn btn-default" />
                </form>
            </div>
        )
    }
}

export default connect()(Register);

