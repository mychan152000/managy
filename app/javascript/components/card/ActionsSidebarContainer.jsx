import { connect } from 'react-redux';
import ActionsSidebar from "./ActionsSidebar";
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.cardId;
  const newArchivedStatus = !ownProps.archived;

  return {
    onDelete: () => {
      //dispatch(actions.deleteCard(id));
    },

    onSubmit: () => {
      dispatch(actions.updateCardArchived(id, newArchivedStatus));
    }
  }
};

const ActionsSidebarContainer = connect(null, mapDispatchToProps)(ActionsSidebar);

export default ActionsSidebarContainer;