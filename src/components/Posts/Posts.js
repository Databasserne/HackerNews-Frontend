import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FetchPosts } from '../../actions';
import Post from './Post';

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
                <Post key={index} number={index + 1} title={post.title} author={post.author_name} points={201}/>
            );
        });

        return(
            <div>
                <h1>Posts</h1>
                <table className="table">
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
