import React from "react";

class DescriptionForm extends React.Component {
  state = {
    editing: false,
    description: this.props.card.description
  };

  componentDidUpdate(prevProps) {
    if (prevProps.card.description !== this.props.card.description) {
      this.setState({
        description: this.props.card.description
      });
    }
  }

  handleSubmitDescription = (event) => {
    this.props.onSubmit(this.state.description);
    this.closeForm();
  };

  handleCloseForm = (event) => {
    this.closeForm();
  };

  closeForm = () => {
    this.setState({
      editing: false,
      description: this.props.card.description
    });
  };

  openForm = (event) => {
    this.setState({ editing: true });
  };

  handleDescriptionChange = (event) => {
    const value = event.target.value;
    this.setState({ description: value });
  };

  render() {
    return (
      <form className="description">
        <p>Description</p>
        <span 
          id="description-edit" 
          className="link"
          onClick={this.openForm}
        >
          Edit
        </span>
        { !this.state.editing ? (
          <p className="textarea-overlay">{this.props.card.description}</p> 
        ) : (
          <>
            <textarea
              className="textarea-toggle" 
              onChange={this.handleDescriptionChange}
              value={this.state.description}
              rows="1" 
              autoFocus={true}
            />
            <div>
              <div 
                className="button" 
                value="Save"
                onClick={this.handleSubmitDescription}
                >Save
              </div>
              <i 
                className="x-icon icon"
                onClick={this.handleCloseForm}
              ></i>
            </div>
          </>
        )}

        <p id="description-edit-options" className="hidden">
          You have unsaved edits on this field.{" "}
          <span className="link">View edits</span> -{" "}
          <span className="link">Discard</span>
        </p>
      </form>
    );
  }
}

export default DescriptionForm;
