import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = { upvoted: this.props.hasUpvoted, downvoted: this.props.hasDownvoted, votes: props.votes };

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
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

    render() {
        const { title, author, id } = this.props;
        const { votes } = this.state;


        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += this.state.upvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += this.state.downvoted ? " downvoted" : "";

        const postDetailLink = `/post/${id}`;
        
        return (
            <tr>
                <td>
                    <div>
                        <span>{votes}. <i onClick={this.upvote} className={upvoteClass} /><i onClick={this.downvote} className={downvoteClass} /></span>
                    </div>
                    <div>
                        <Link className="title" to={postDetailLink}>{title}</Link><br />
                    <span className="by-line">Author: {author}</span>
                    </div>
                </td>
            </tr >
        );
    }
}

export default Post;
