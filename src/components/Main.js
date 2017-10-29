import React from 'react'
import { Route } from 'react-router-dom';

import Posts from './Posts';
import Login from './Login';

export default () => {
    return (
        <main>
            <Route exact path="/" component={Posts} />
            <Route path="/login" component={Login} />
        </main>
    );
}
