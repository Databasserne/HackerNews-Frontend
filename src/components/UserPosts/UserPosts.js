import React, { Component } from 'react';

import Post from '../Posts//Post';
import PostForm from '../Reuseable/PostForm';

class UserPosts extends Component {

    componentDidMount() {
        this.props.fetchUserPosts();

        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.editPostSubmit = this.editPostSubmit.bind(this);
        this.cancelEditPost = this.cancelEditPost.bind(this);
    }

    editPost(id) {
        const post = this.props.posts.data.filter(post => {
            return post.id === id;
        })[0];

        this.props.editPost(post)
    }

    cancelEditPost() {
        this.props.cancelEditPost();
    }

    deletePost(id) {
        this.props.deletePost(id);
    }

    editPostSubmit(title, body) {
        var post = {...this.props.posts.editPost};

        post.title = title;
        post.body = body;

        this.props.editPostSubmit(post);
    }

    render() {
        const { isEditing } = this.props.posts;

        var body;

        if (isEditing) {
            const { editPost } = this.props.posts;

            body = (
                <PostForm
                    submitValue={"Update"}
                    cancelValue={"Cancel"}
                    title={editPost.title}
                    body={editPost.body}
                    onSubmit={this.editPostSubmit}
                    onCancel={this.cancelEditPost}
                />
            );
        } else {
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

            body = (
                <table className="table">
                    <tbody>
                        {tBody}
                    </tbody>
                </table>
            );
        }

        return (
            <div>
                <div className="container">
                    <div>
                        <h1>My Posts</h1>
                    </div>
                </div>
                {body}
            </div>
        );
    }
}

export default UserPosts;
