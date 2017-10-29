import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Post = ({title, author, points, number}) => {
    return (
        <tr>
            <td><span>{number}.</span> {title} <span className="host-url">(medium.com)</span><br/>
            <span className="by-line">{points} points by {author}</span></td>
        </tr>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
}

export default Post
