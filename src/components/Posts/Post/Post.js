import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = { upvoted: this.props.hasUpvoted, downvoted: this.props.hasDownvoted, votes: props.votes };

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.renderVotesButtons = this.renderVotesButtons.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    upvote() {
        if (this.state.downvoted || this.state.upvoted) {
            alert("Can't change your vote");
            return;
        }

        this.setState({ upvoted: !this.state.upvoted, votes: this.state.votes + 1 });
        this.props.upvote(this.props.id);
    }

    downvote() {
        if (this.state.downvoted || this.state.upvoted) {
            alert("Can't change your vote");
            return;
        }

        this.setState({ downvoted: !this.state.downvoted, votes: this.state.votes - 1 });
        this.props.downvote(this.props.id);
    }

    renderVotesButtons() {
        if (this.props.ownPost) return;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += this.state.upvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += this.state.downvoted ? " downvoted" : "";

        return (
            <span>
                <i onClick={this.upvote} className={upvoteClass} /><i onClick={this.downvote} className={downvoteClass} />
            </span>
        );
    }

    editPost() {
        this.props.editPost(this.props.id);
    }

    deletePost() {
        this.props.deletePost(this.props.id);
    }

    renderActionButtons() {
        if (!this.props.ownPost) return;

        return (
            <td>
                <div className="btn btn-warning" onClick={this.editPost}>Edit</div>
                <div className="btn btn-danger" onClick={this.deletePost}>Delete</div>
            </td>
        );
    }

    render() {
        const { title, author, id } = this.props;
        const { votes } = this.state;

        const postDetailLink = `/post/${id}`;

        return (
            <tr>
                <td>
                    <div>
                        <span>{votes}. {this.renderVotesButtons()}</span>
                    </div>
                    <div>
                        <Link className="title" to={postDetailLink}>{title}</Link><br />
                        <span className="by-line">Author: {author}</span>
                    </div>
                </td>
                {this.renderActionButtons()}
            </tr >
        );
    }
}

export default Post;
