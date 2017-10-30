import React, { Component } from 'react';


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
        if (this.props.isLoggedIn) {
            this.props.history.push("/");
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn) {
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
        const { username, password } = this.state;
        console.log("Submit:", username, password);

        this.props.login(username, password);

        event.preventDefault();
    }

    render() {

        const isSubmitting = this.props.isFetching ? 'disabled' : '';

        var error;

        if(this.props.hasError){
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
                        <label className="label label-default">Username</label>
                        <input className="form-control" type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label className="label label-default">Password</label>
                        <input className="form-control" type="password" value={this.state.password} onChange={this.handleChangePassword} />
                    </div>
                    <input disabled={isSubmitting} type="submit" className="btn btn-default" />
                    {error}
                </form>
            </div>
        );
    }
}

export default Login;
