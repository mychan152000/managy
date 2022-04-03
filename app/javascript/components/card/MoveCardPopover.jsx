import React from 'react';

class MoveCardPopover extends React.Component {
  state = {
    open: false,
  };

  handleOpenClick = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
    });
  };

  handleCloseClick = (event) => {
    event.preventDefault();
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <>
        {this.state.open && (
          <div className="popover move-card">
            <div>
              <header>
                <span>Move Card</span>
                <a
                  onClick={this.handleCloseClick}
                  href="#"
                  className="icon-sm icon-close"
                ></a>
              </header>
              <div className="content">
                <div className="button-link setting board">
                  <span className="label">Board</span>
                  <span className="value js-board-value">First Board</span>
                  <label>Board</label>
                  <select>
                    {this.props.allBoards.map((board) => {
                      return <option value={board.id}>{board.title}</option>;
                    })}
                  </select>
                </div>
                <div>
                  <div className="button-link setting list">
                    <span className="label">List</span>
                    <span className="value js-list-value">Intermediate</span>
                    <label>List</label>
                    <select value={this.props.card.list_id}>
                      {this.props.allLists.map((list) => {
                        return <option value={list.id}>{list.title}</option>;
                      })}
                    </select>
                  </div>
                  <div className="button-link setting position">
                    <span className="label">Position</span>
                    <span className="value">1</span>
                    <label>Position</label>
                    <select>
                      <option value="top" selected="selected">
                        1 (current)
                      </option>
                      <option value="98303">2</option>
                      <option value="163839">3</option>
                      <option value="212991">4</option>
                      <option value="245759">5</option>
                      <option value="278527">6</option>
                      <option value="311295">7</option>
                      <option value="bottom">8</option>
                    </select>
                  </div>
                </div>

                <button className="button" type="submit">
                  Move
                </button>
              </div>
            </div>
          </div>
        )}

        <li onClick={this.handleOpenClick} className="move-button">
          <i className="forward-icon sm-icon"></i>Move
        </li>
      </>
    );
  }
}

export default MoveCardPopover;
