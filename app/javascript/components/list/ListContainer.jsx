import { connect } from "react-redux";
import List from "./List";
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const list_id = ownProps.id;
  return {
    onTitleUpdate: (title) => {
      dispatch(actions.updateList(list_id, title));
    },

    onCardAdd: (title, callback) => {
    	dispatch(actions.createCard(list_id, title, callback));
    }
  }
}

const ListContainer = connect(
  null,
  mapDispatchToProps
)(List);

export default ListContainer;