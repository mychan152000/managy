import React from 'react';
import { Link } from 'react-router-dom';
import MoveCardPopoverContainer from './MoveCardPopoverContainer';

const ActionsSidebar = (props) => {
  // const handleArchive = (event) => {

  // };

  return (
    <>
      <h2>Actions</h2>
      <ul>
        <MoveCardPopoverContainer cardId={props.cardId} />
        <li className="copy-button">
          <i className="card-icon sm-icon"></i>Copy
        </li>
        <li className="subscribe-button">
          <i className="sub-icon sm-icon"></i>Subscribe
          <i className="check-icon sm-icon"></i>
        </li>
        <hr />
        {props.archived ? (
          <>
            <li className="unarchive-button" onClick={props.onSubmit}>
              <i class="send-icon sm-icon"></i>Send to board
            </li>
            <Link to={`/boards/${props.boardId}`}>
              <li className="red-button">
                <i class="minus-icon sm-icon"></i>Delete
              </li>
            </Link>
          </>
        ) : (
          <li className="archive-button" onClick={props.onSubmit}>
            <i className="file-icon sm-icon "></i>Archive
          </li>
        )}
      </ul>
    </>
  );
};

export default ActionsSidebar;
