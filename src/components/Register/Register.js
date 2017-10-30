import React, { Component } from 'react';

import './style.css';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = { fullname: '', username: '', password: '', repeatPassword: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFullname = this.handleChangeFullname.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRepeatPassword = this.handleChangeRepeatPassword.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.didRegister){
            this.props.history.push("/login");
        }
    }

    handleChangeFullname(event) {
        this.setState({ fullname: event.target.value });
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
        const { fullname, username, password, repeatPassword } = this.state;

        this.props.register(fullname, username, password, repeatPassword);

        event.preventDefault();
    }

    render() {
        var error;

        if (this.props.hasError) {
            error = (
                <div>
                    <p>{this.props.error.error_message}</p>
                </div>
            );
        }

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="label label-default">Full name</label>
                        <input className="form-control" type="text" value={this.state.fullname} onChange={this.handleChangeFullname} />
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
                    {error}
                </form>
            </div>
        )
    }
}

export default Register;

