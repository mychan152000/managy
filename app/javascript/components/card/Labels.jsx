import React from 'react';

const ALL_LABELS = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];

class Labels extends React.Component {
  state = {
    popOverOpen: false,
  };

  handlePopOverOpen = () => {
    this.setState({
      popOverOpen: true,
    });
  };

  handlePopOverClose = (event) => {
    event.preventDefault();
    this.setState({
      popOverOpen: false,
    });
  };

  render() {
    return (
      <>
        <h3>Labels</h3>
        {this.props.labels.map((label) => {
          return (
            <div className="member-container">
              <div className={`${label} label colorblindable`}></div>
            </div>
          );
        })}

        <div onClick={this.handlePopOverOpen} className="member-container">
          <i className="plus-icon sm-icon"></i>
        </div>

        {this.state.popOverOpen ? (
          <div class="popover labels">
            <div id="add-options-labels-dropdown">
              <header>
                <span>Labels</span>
                <a
                  href="#"
                  onClick={this.handlePopOverClose}
                  class="icon-sm icon-close"
                ></a>
              </header>
              <div class="content">
                <input
                  class="dropdown-input"
                  placeholder="Search labels..."
                  type="text"
                />
                <div class="labels-search-results">
                  <ul class="label-list">
                    {ALL_LABELS.map((color) => (
                      <>
                        <li>
                          <div
                            onClick={() => this.props.onToggleLabel(color)}
                            class={`${color} colorblindable}`}
                          >
                            {this.props.labels.includes(color) ? (
                              <i class="check-icon sm-icon"></i>
                            ) : null}
                          </div>
                          <div class={`label-background ${color}`}></div>
                          <div class="label-background-overlay"></div>
                          <i class="edit-icon icon not-implemented"></i>
                        </li>
                      </>
                    ))}
                  </ul>
                  <ul class="light-list">
                    <li class="not-implemented">Create a new label</li>
                    <hr />
                    <li class="toggleColorblind">
                      Enable color blind friendly mode.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Labels;
