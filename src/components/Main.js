import React from 'react'
import { Route } from 'react-router-dom';

import Posts from './Posts';
import PostDetails from './PostDetails';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import UserPosts from './UserPosts';

export default () => {
    return (
        <main>
            <Route exact path="/" component={Posts} />
            <Route path="/post/:number" component={PostDetails} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={Profile} />
            <Route path="/my-posts" component={UserPosts} />
        </main>
    );
}
