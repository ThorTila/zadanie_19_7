import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, editComment} from './Actions';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  deleteComment: (id) => dispatch(removeComment(id)),
  editComment: (id, text) => dispatch(editComment(id, text))
});

export default connect(null, mapDispatchToProps)(Comment);