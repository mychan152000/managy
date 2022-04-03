import { connect } from 'react-redux';
import DescriptionForm from './DescriptionForm';
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.card.id;

  return {
    onSubmit: (description) => {
      dispatch(actions.updateCardDescription(id, description));
    }
  }
};

const DescriptionFormContainer = connect(null, mapDispatchToProps)(DescriptionForm);

export default DescriptionFormContainer;