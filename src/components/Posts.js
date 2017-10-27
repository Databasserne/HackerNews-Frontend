import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FetchPosts } from '../actions';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;

        if(this.props.posts.isFetching){
            return <h1>Loading...</h1>
        }

        const tBody = posts.data.map((post, index) => {
            return (
                <tr key={index}>
                    <td>{post.title}</td>
                </tr>
            );
        });

        return(
            <div>
                <h1>Posts</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tBody}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts: FetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
