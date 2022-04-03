import { connect } from 'react-redux';
import Comment from './Comment';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditClick: () => { console.log('editing') },
    onDeleteClick: () => { console.log('cannot delete') }
  }
}

const CommentContainer = connect(
  null,
  mapDispatchToProps
)(Comment);

export default CommentContainer