import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        const tBody = posts.data.map((post) => {
            return (
                <Post 
                    key={post.id} 
                    title={post.title}
                    author={post.author_name} 
                    votes={post.votes} 
                    id={post.id} 
                    hasUpvoted={post.hasUpvoted} 
                    hasDownvoted={post.hasDownvoted} 
                />
            );
        });

        return (
            <div>
                <h1>Posts</h1>
                <table className="table">
                    <tbody>
                        {tBody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Posts;
