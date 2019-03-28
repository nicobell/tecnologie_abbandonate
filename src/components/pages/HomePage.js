import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import MainMenu from '../layout/MainMenu';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MainMenu location={this.props.location} />
      </div>
    )
  }
}

export default HomePage;
