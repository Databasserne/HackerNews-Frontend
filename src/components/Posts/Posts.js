import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.posts.voteError != null) {
            alert(nextProps.posts.voteError);
            nextProps.clearVoteError();
        }
    }

    render() {
        const { posts, isLoggedIn } = this.props;

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
                    canDownvote={post.canDownvote}
                    canUpvote={isLoggedIn}
                    createdAt={post.created_at}
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
