import { connect } from 'react-redux';
import AddList from './AddList';
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const board_id = ownProps.board_id;
  return {
    onSubmit: (title) => {
      dispatch(actions.createList(board_id, title));
    }
  } 
};

const AddListContainer = connect(
  null, 
  mapDispatchToProps
)(AddList);

export default AddListContainer;