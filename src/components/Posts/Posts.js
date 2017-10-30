import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        if (this.props.posts.isFetching) {
            return <h1>Loading...</h1>
        }

        const tBody = posts.data.map((post, index) => {
            return (
                <Post 
                    key={index} 
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
