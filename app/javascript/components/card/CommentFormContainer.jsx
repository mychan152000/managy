import { connect } from 'react-redux';
import CommentForm from "./CommentForm";
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.cardId;

  return {
    onSubmit: (comment) => {
      dispatch(actions.addComment(id, comment));
    }
  }
};

const CommentFormContainer = connect(null, mapDispatchToProps)(CommentForm);

export default CommentFormContainer;