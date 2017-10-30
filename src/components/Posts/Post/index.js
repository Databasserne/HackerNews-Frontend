import { connect } from 'react-redux';

import Post from './Post';
import { upvote } from '../../../actions/Posts';



export default connect(null, { upvote })(Post);
