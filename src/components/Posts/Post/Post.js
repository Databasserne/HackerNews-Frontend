import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = { upvoted: false, downvoted: false };

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    upvote() {
        if (this.state.downvoted) {
            alert("Can't both up and downvote");
            return;
        }

        this.setState({ upvoted: !this.state.upvoted });
    }

    downvote() {
        if (this.state.upvoted) {
            alert("Can't both up and downvote");
            return;
        }

        this.setState({ downvoted: !this.state.downvoted });
    }

    render() {
        const { title, author, points, number, id } = this.props;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += this.state.upvoted ? " upvoted" : "";

        var downvoteClass = "glyphicon glyphicon-arrow-down";
        downvoteClass += this.state.downvoted ? " downvoted" : "";

        const postDetailLink = `/post/${id}`;
        
        return (
            <tr>
                <td>
                    <div>
                        <span>{number}. <i onClick={this.upvote} className={upvoteClass} /><i onClick={this.downvote} className={downvoteClass} /></span>
                    </div>
                    <div>
                        <Link className="title" to={postDetailLink}>{title}</Link> <span className="host-url">(medium.com)</span><br />
                    <span className="by-line">{points} points by {author}</span>
                    </div>
                </td>
            </tr >
        );
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
}

export default Post
