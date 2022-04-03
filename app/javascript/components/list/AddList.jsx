import React from 'react';

class AddList extends React.Component {
  state = {
    active: false,
    value: ''
  }

  handleActivateField = () => {
    this.setState({
      active: true
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const value = this.state.value;
    if (!value) return;
    this.props.onSubmit(value);
    this.closeInput();
  }

  handleCancel = (event) => {
    event.stopPropagation();
    this.closeInput();
  }

  closeInput = () => {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <div 
        id="new-list" 
        className={`new-list ${this.state.active && 'selected'}`}
        onClick={this.handleActivateField}
      >
        { this.state.active ? ( 
          <>
            <input 
              type="text" 
              placeholder="Add a list..."
              value={this.state.value}
              name="newListTitle"
              onChange={this.handleInputChange}
            />
            <div>
                <input 
                  type="submit" 
                  className="button" 
                  value="Save" 
                  onClick={this.handleSubmit}
                />
                <i 
                  className="x-icon icon"
                  onClick={this.handleCancel}
                >
                </i>
            </div>
          </>
        ) : (
          <span>Add a list...</span>
        )}
      </div>
    )
  }
}

export default AddList;
