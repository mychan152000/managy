import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../../actions/BoardActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.card.id;

  return {
    onSubmit: (title) => {
      dispatch(actions.updateCardTitle(id, title))
    }
  }
  
}

const HeaderContainer = connect(
  null,
  mapDispatchToProps
)(Header);

export default HeaderContainer;