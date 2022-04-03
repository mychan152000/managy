import React from 'react';

class Header extends React.Component {
  state = {
    title: this.props.card.title,
  };

  handleTitleChange = (event) => {
    if (event.key && event.key === 'Enter') return;

    const value = event.target.value;

    this.setState({
      title: value,
    });
  };

  handleTitleSubmit = (event) => {
    if (this.state.title.length === 0) return;
    this.props.onSubmit(this.state.title);
  };

  handleKeyDown = (event) => {
    if (event.key && event.key !== 'Enter') return;

    event.target.blur();
  };

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          style={{ height: '45px' }}
          onChange={this.handleTitleChange}
          value={this.state.title}
          onBlur={this.handleTitleSubmit}
          onKeyDown={this.handleKeyDown}
        >
          {this.state.title}
        </textarea>
        <p>
          in list{' '}
          <a className="link">{this.props.list && this.props.list.title}</a>
          <i className="sub-icon sm-icon"></i>
        </p>
      </header>
    );
  }
}

export default Header;
