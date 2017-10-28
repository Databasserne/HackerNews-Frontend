import React from 'react'
import { Route } from 'react-router-dom';

import Posts from './Posts';

export default () => {
    return (
        <main>
            <Route exact path="/" component={Posts} />
        </main>
    );
}
