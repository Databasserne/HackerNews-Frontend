import React, { Component } from 'react';

import './style.css';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = { fullname: '' };

        this.handleChangeFullname = this.handleChangeFullname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { fullname } = this.props;

        this.setState({ fullname });

        this.props.fetchUser();
    }

    handleChangeFullname(event) {
        this.setState({ fullname: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.updateUser(this.state.fullname);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <h1>Profile!</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="label label-default">Full Name</label>
                            <input type="text" className="form-control" value={this.state.fullname} onChange={this.handleChangeFullname} />
                        </div>
                        <input type="submit" className="btn btn-default" value="Update" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Profile;
