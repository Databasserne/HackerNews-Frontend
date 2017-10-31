import React, { Component } from 'react';

class PostForm extends Component {

    constructor(props) {
        super(props);

        const title = props.title === undefined ? '' : props.title;
        const body = props.body === undefined ? '' : props.body;

        this.state = { title, body };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeBody(event) {
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title, body } = this.state;

        console.log("Title", this.state.title);
        console.log("Body", this.state.body);

        this.props.onSubmit(title, body);
    }

    handleCancel(event) {
        this.props.onCancel();
    }

    render() {
        const { submitValue, cancelValue } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="label label-default">Title</label>
                    <input type="text" value={this.state.title} onChange={this.handleChangeTitle} className="form-control" />
                </div>
                <div className="form-group">
                    <label className="label label-default">Body</label>
                    <textarea value={this.state.body} className="form-control" onChange={this.handleChangeBody} />
                </div>
                <div onClick={this.handleCancel} className="btn btn-danger">{cancelValue}</div>
                <input type="submit" className="btn btn-default" value={submitValue} />
            </form>
        );
    }
}

export default PostForm;
