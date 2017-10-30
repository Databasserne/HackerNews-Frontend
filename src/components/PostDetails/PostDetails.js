import React, { Component } from 'react';

class PostDetails extends Component {

    componentDidMount() {
        const id = this.props.match.params.number;

        this.props.fetchPost(id);
    }

    render() {
        if (this.props.isFetching) {
            return (
                <h1>Loading...</h1>
            );
        }

        const { title, body, author_name, created_at } = this.props.post;

        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <p>By {author_name}, posted {created_at}</p>
            </div>
        );
    }
}

export default PostDetails;
