import React, { Component } from 'react';

import './style.css';

class PostDetails extends Component {

    componentDidMount() {
        const id = this.props.match.params.number;

        this.props.fetchPost(id);
        this.renderComments = this.renderComments.bind(this)
        this.renderVotesButtons = this.renderVotesButtons.bind(this);
    }

    renderVotesButtons(comment) {
        const { hasUpvoted, hasDownvoted } = comment;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += hasUpvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += hasDownvoted ? " downvoted" : "";

        return (
            <span className="arrows">
                <i onClick={this.upvote} className={upvoteClass} /><i onClick={this.downvote} className={downvoteClass} />
            </span>
        );
    }

    renderComments(comments, depth) {
        if(depth === undefined) depth = 1;

        return comments.map(comment => {
            const commentDOM = (
                <div>
                    <p>{comment.votes} {this.renderVotesButtons(comment)} - {comment.body}</p>
                    <p className="byline">Author: {comment.author}</p>
                </div>
            );

            if(comment.comments.length === 0){
                return (
                    <div key={comment.id} style={{marginLeft: 10 * depth}}>
                        {commentDOM}
                    </div>
                );
            } else {
                return (
                    <div key={comment.id} style={{marginLeft: 10 * depth}}>
                        {commentDOM}
                        {this.renderComments(comment.comments, depth + 1)}
                    </div>
                );
            }
        });
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
                <p className="byline">By {author_name}, posted {created_at}</p>
                <h2>Comments</h2>
                <div>
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}

export default PostDetails;
