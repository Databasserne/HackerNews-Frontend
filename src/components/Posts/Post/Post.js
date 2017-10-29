import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Post extends Component {

    constructor(props) {
        super(props);

        this.state = { upvoted: false };

        this.upvote = this.upvote.bind(this);
    }

    upvote() {
        this.setState({ upvoted: !this.state.upvoted });
    }

    render() {
        const { title, author, points, number } = this.props;

        var upvoteClass = "glyphicon glyphicon-arrow-up";
        upvoteClass += this.state.upvoted ? " upvoted" : "";
        

        return (
            <tr>
                <td><span>{number}. <i onClick={this.upvote} className={upvoteClass} /></span> {title} <span className="host-url">(medium.com)</span><br />
                    <span className="by-line">{points} points by {author}</span></td>
            </tr>
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
