import React from "react";
import CardTile from "../card/CardTile";
import { Link } from 'react-router-dom';

class List extends React.Component  {
  state = {
    active: false,
    fieldValue: this.props.list.title,
    addCardActive: false,
    cardValue: ''
  }

  handleTitleClick = () => {
    this.setState({
      active: true
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      fieldValue: value
    });
  }

  handleEnterPress = (event) => {
    const keyName = event.key;
    if (!(keyName === 'Enter')) return;
    this.submitNewTitle();
  }

  handleInputBlur = () => {
    this.submitNewTitle();
  }

  submitNewTitle = () => {
    const title = this.state.fieldValue;
    this.props.onTitleUpdate(title);
    this.deactivateInput();
  }

  deactivateInput = () => {
    this.setState({
      active: false
    });
  }

  handleOpenCardForm = (event) => {
    // event.stopPropagation();
    this.setState({
      addCardActive: true
    });
  }

  handleCloseCardForm = (event) => {
    this.closeCardForm();
  }

  closeCardForm = () => {
    this.setState({
      cardValue: '',
      addCardActive: false
    });
  }

  handleCardInputChange = (event) => {
    const value = event.target.value;
    this.setState({ cardValue: value });
  }

  handleAddCard = (event) => {
    event.preventDefault();

    if (this.state.cardValue === '') return;
    
    this.props.onCardAdd(this.state.cardValue, this.closeCardForm);
  }

  render () {
    return (
      <div className={`list-wrapper ${this.state.addCardActive && 'add-dropdown-active'}`}>
        <div className="list-background">
          <div className="list">
              <a className="more-icon sm-icon" href=""></a>
              <div>
                {
                  this.state.active ? (
                    <input 
                      type="text" 
                      className="list-title" 
                      value={this.state.fieldValue}
                      autoFocus={true} 
                      onChange={this.handleInputChange}
                      onKeyPress={this.handleEnterPress}
                      onBlur={this.handleInputBlur}
                    />
                  ) : (
                    <p 
                      className="list-title"
                      onClick={this.handleTitleClick}
                    >
                      {this.props.list.title}
                    </p>
                  )
                }
              </div>
              <div className="add-dropdown add-top">
                  <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                  <div className="add-options"><span>...</span>
                  </div>
              </div>
              <div id="cards-container" data-id="list-1-cards">
                {this.props.cards.sort((a, b) => a.id - b.id).map(card => {
                    return (
                      <Link to={`/cards/${card.id}`}>
                        <CardTile card={card} key={card.id} />
                      </Link>
                    );
                  })
                }
              </div>
              <div className={`add-dropdown add-bottom ${this.state.addCardActive && "active-card"}`}>
                  <div className="card">
                    <div className="card-info"></div>
                    <textarea 
                      name="add-card" 
                      value={this.state.cardValue}
                      onChange={this.handleCardInputChange}
                    ></textarea>
                    <div className="members"></div>
                  </div>
                  <a 
                    className="button"
                    onClick={this.handleAddCard}
                  >
                    Add
                  </a>
                  <i 
                    className="x-icon icon"
                    onClick={this.handleCloseCardForm}
                  ></i>
                  <div className="add-options"><span>...</span>
                  </div>
              </div>
              <div 
                className="add-card-toggle" 
                data-position="bottom"
                onClick={this.handleOpenCardForm}
              >
              Add a card...
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;

