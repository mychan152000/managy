import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionFormContainer from './DescriptionFormContainer.jsx';
import DetailsSection from './DetailsSection.jsx';
import CommentFormContainer from './CommentFormContainer.jsx';
import ActivityListContainer from './ActivityListContainer.jsx';
import AddSidebar from './Add.jsx';
import ActionsSidebarContainer from './ActionsSidebarContainer.jsx';
import HeaderContainer from './HeaderContainer.jsx';

class Card extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div id="modal-container">
          <div className="screen"></div>
          <div id="modal">
            <Link to={`/boards/${this.props.boardId}`}>
              <i className="x-icon icon close-modal"></i>
            </Link>
            {this.props.card.archived ? (
              <div className="archived-banner">
                <i className="file-icon icon"></i>
                This card is archived.
              </div>
            ) : null}
            <HeaderContainer list={this.props.list} card={this.props.card} />
            <section className="modal-main">
              <ul className="modal-outer-list">
                <li className="details-section">
                  <DetailsSection card={this.props.card} />
                  <DescriptionFormContainer card={this.props.card} />
                </li>
                <li className="comment-section">
                  <CommentFormContainer cardId={this.props.card.id} />
                </li>
                <li className="activity-section">
                  <ActivityListContainer cardId={this.props.card.id} />
                </li>
              </ul>
            </section>
            <aside className="modal-buttons">
              <AddSidebar />
              <ActionsSidebarContainer
                archived={this.props.card.archived}
                cardId={this.props.card.id}
                boardId={this.props.boardId}
              />
              <ul className="light-list">
                <li className="not-implemented">Share and more...</li>
              </ul>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
