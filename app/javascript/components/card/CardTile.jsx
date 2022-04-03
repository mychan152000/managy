import React from 'react';

import { getDateDetails } from '../../lib/viewHelpers';

function CardTile({ card }) {
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {card.labels.map((label) => {
            return <div className={`card-label ${label} colorblindable`}></div>;
          })}
          <p>{card.title}</p>
        </div>
        <div className="card-icons">
          {card.due_date && (
            <i
              className={'clock-icon sm-icon ' + getDateDetails(card).className}
            >
              {getDateDetails(card).formattedDueDate}
            </i>
          )}
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default CardTile;
