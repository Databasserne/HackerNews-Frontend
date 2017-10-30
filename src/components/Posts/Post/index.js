import { connect } from 'react-redux';

import Post from './Post';
import { upvote, downvote } from '../../../actions/Posts';



export default connect(null, { upvote, downvote })(Post);
