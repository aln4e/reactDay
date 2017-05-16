import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name + " " + this.props.lastName}</h1>
      </div>
    );
  }
}

export default Header;
