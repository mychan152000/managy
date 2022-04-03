import React from 'react';

class Comment extends React.Component {
  state = {

  }

  render() {
    const comment = this.props.comment;

    return (
      <>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <h3>My Favorite Team</h3>
        <div className="comment static-comment">
          <span>{comment.text}</span>
        </div>
        <small>
          22 minutes ago - 
          <span 
            className="link"
            onClick={this.props.onEditClick}
          >
            Edit
          </span> 
          -{" "}
          <span 
            className="link"
            onClick={this.props.onDeleteClick}
          >
            Delete
          </span>
        </small>
        <div className="comment">
          <label>
            <textarea required="" rows="1">
              The activities have not been implemented yet.
            </textarea>
            <div>
              <a className="light-button card-icon sm-icon"></a>
              <a className="light-button smiley-icon sm-icon"></a>
              <a className="light-button email-icon sm-icon"></a>
            </div>
            <div>
              <p>You haven't typed anything!</p>
              <input
                type="submit"
                className="button not-implemented"
                value="Save"
              ></input>
              <i className="x-icon icon"></i>
            </div>
          </label>
        </div>
      </>
    )
  }
}

export default Comment;