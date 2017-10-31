import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.renderVotesButtons = this.renderVotesButtons.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    upvote() {
        const { hasUpvoted, hasDownvoted } = this.props;
        if (hasUpvoted || hasDownvoted) {
            alert("Can't change your vote");
            return;
        }

        this.props.upvote(this.props.id);
    }

    downvote() {
        const { hasUpvoted, hasDownvoted } = this.props;
        if (hasUpvoted || hasDownvoted) {
            alert("Can't change your vote");
            return;
        }

        this.props.downvote(this.props.id);
    }

    renderVotesButtons() {
        if (this.props.ownPost) return;

        const { hasUpvoted, hasDownvoted } = this.props;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += hasUpvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += hasDownvoted ? " downvoted" : "";

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
        const { title, author, id, votes } = this.props;

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
