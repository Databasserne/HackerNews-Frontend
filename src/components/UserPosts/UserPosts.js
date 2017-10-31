import React, { Component } from 'react';

import Post from '../Posts//Post';

class UserPosts extends Component {

    componentDidMount() {
        this.props.fetchUserPosts();
        
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    editPost(id) {
        console.log("Edit", id);
    }

    deletePost(id) {
        this.props.deletePost(id);
    }

    render() {
        const tBody = this.props.posts.data.map((post) => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author_name}
                    votes={post.votes}
                    id={post.id}
                    hasUpvoted={post.hasUpvoted}
                    hasDownvoted={post.hasDownvoted}
                    ownPost={true}
                    editPost={this.editPost}
                    deletePost={this.deletePost}
                />
            );
        });

        return (
            <div>
                <div className="container">
                    <div>
                        <h1>My Posts</h1>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                        {tBody}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserPosts;
