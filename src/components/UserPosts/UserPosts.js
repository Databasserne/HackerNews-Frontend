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
        this.newPost = this.newPost.bind(this);
        this.cancelNewPost = this.cancelNewPost.bind(this);
        this.newPostSubmit = this.newPostSubmit.bind(this);
    }

    newPost(event) {
        this.props.newPost();
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
    
    editPostSubmit(title, body) {
        var post = { ...this.props.posts.post };
        
        post.title = title;
        post.body = body;
        
        this.props.editPostSubmit(post);
    }

    cancelNewPost() {
        this.props.cancelNewPost();
    }
    
    newPostSubmit(title, body) {
        this.props.newPostSubmit(title, body);
    }
    
    deletePost(id) {
        this.props.deletePost(id);
    }

    render() {
        const { isEditing, isCreatingNewPost } = this.props.posts;

        var body;

        if (isEditing) {
            const { post } = this.props.posts;

            body = (
                <PostForm
                    submitValue={"Update"}
                    cancelValue={"Cancel"}
                    title={post.title}
                    body={post.body}
                    onSubmit={this.editPostSubmit}
                    onCancel={this.cancelEditPost}
                />
            );
        } else if (isCreatingNewPost) {
            body = (
                <PostForm
                    submitValue={"Save"}
                    cancelValue={"Cancel"}
                    onSubmit={this.newPostSubmit}
                    onCancel={this.cancelNewPost}
                />
            );
        } else {
            const tBody = this.props.posts.data.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={this.props.fullname}
                        votes={post.votes}
                        id={post.id}
                        hasUpvoted={post.hasUpvoted}
                        hasDownvoted={post.hasDownvoted}
                        createdAt={post.created_at}
                        ownPost={true}
                        editPost={this.editPost}
                        deletePost={this.deletePost}
                        canUpvote={false}
                        canDownvote={false}
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
                        <h1>My Posts <div className="btn btn-success" onClick={this.newPost}>New post</div></h1>
                    </div>
                </div>
                {body}
            </div>
        );
    }
}

export default UserPosts;
