import React, { Component } from 'react';

import './style.css';

class PostDetails extends Component {

    constructor(props) {
        super(props);

        this.state = { body: '', commentId: null };
    }

    componentDidMount() {
        const id = this.props.match.params.number;

        this.props.fetchPost(id);
        this.props.fetchComments(id);
        this.renderComments = this.renderComments.bind(this)
        this.renderVotesButtons = this.renderVotesButtons.bind(this);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.renderCommentForm = this.renderCommentForm.bind(this);

        this.addComment = this.addComment.bind(this);
        this.handleChangeCommentBody = this.handleChangeCommentBody.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.addCommentToComment = this.addCommentToComment.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.voteError != null) {
            alert(nextProps.voteError);
            nextProps.clearVoteError();
        }
    }

    upvote(event) {
        this.props.upvote(this.props.post.id, event.target.id);
    }

    downvote(event) {
        this.props.downvote(this.props.post.id, event.target.id);
    }

    renderVotesButtons(comment) {
        if (this.props.ownPost) return;

        const { hasUpvoted, hasDownvoted, canDownvote } = comment;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += hasUpvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += hasDownvoted ? " downvoted" : "";

        const upVote = <i id={comment.id} onClick={this.upvote} className={upvoteClass} />
        const downVote = canDownvote ? (<i id={comment.id} onClick={this.downvote} className={downvoteClass} />) : (<span />);

        return (
            <span className="arrows">
                {upVote}{downVote}
            </span>
        );
    }

    addComment(event) {
        this.props.addComment();
    }

    addCommentToComment(event) {
        this.props.addComment();
        this.setState({ commentId: event.target.id });
    }

    handleChangeCommentBody(event) {
        this.setState({ body: event.target.value, });
    }

    handleSubmitComment(event) {
        event.preventDefault();

        this.props.addCommentToPost(this.props.post.id, { body: this.state.body, parentId: this.state.commentId });
        this.setState({ body: '', commentId: null });
    }

    renderComments(comments, depth) {
        if (depth === undefined) depth = 1;

        return comments.map(comment => {
            const commentDOM = (
                <div>
                    <p>{comment.votes} {this.renderVotesButtons(comment)} - {comment.body}</p>
                    <p className="byline">Created by {comment.author} at {comment.createdAt} <span id={comment.id} onClick={this.addCommentToComment} className="make-comment">make comment</span></p>
                </div>
            );

            if (comment.comments.length === 0) {
                return (
                    <div key={comment.id} style={{ marginLeft: 10 * depth }}>
                        {commentDOM}
                    </div>
                );
            } else {
                return (
                    <div key={comment.id} style={{ marginLeft: 10 * depth }}>
                        {commentDOM}
                        {this.renderComments(comment.comments, depth + 1)}
                    </div>
                );
            }
        });
    }

    renderCommentForm() {
        const { isAdding } = this.props.add;

        if (isAdding) {
            return (
                <form onSubmit={this.handleSubmitComment}>
                    <div className="form-group">
                        <label className="label label-default">Body</label>
                        <input type="text" value={this.state.body} onChange={this.handleChangeCommentBody} className="form-control" />
                    </div>
                    <input type="submit" className="btn btn-default" />
                </form>
            )
        }
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
                <p className="byline">Created by {author_name} at {created_at}</p>
                <div className="btn btn-success" onClick={this.addComment}>Add comment</div>
                <div>
                    {this.renderCommentForm()}
                </div>
                <h2>Comments</h2>
                <div>
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}

export default PostDetails;
