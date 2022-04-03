import React from 'react';

class CommentSection extends React.Component {
  state = {
    comment: '',
  };

  handleCommentChange = (e) => {
    const value = e.target.value;
    this.setState({ comment: value });
  };

  handleSubmitComment = (e) => {
    this.props.onSubmit(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <>
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                value={this.state.comment}
                rows="1"
                placeholder="Write a comment..."
                onChange={this.handleCommentChange}
              >
                {this.state.comment}
              </textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input
                  type="submit"
                  className={`button ${
                    this.state.comment.trim().length > 0
                      ? null
                      : 'not-implemented'
                  }`}
                  onClick={this.handleSubmitComment}
                  value="Save"
                ></input>
              </div>
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default CommentSection;
