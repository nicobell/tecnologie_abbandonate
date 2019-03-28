import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class MainMenu extends React.Component {

  render() {
    const {pathname} = this.props.location;
    return (
      <React.Fragment>
        <Menu stackable style={{width: '100%'}}>
          <Menu.Item active={pathname === '/map'}>
            <Link to="/map">WORLD MAP</Link>
          </Menu.Item>

          <Menu.Item active={pathname === '/contacts'}>
            <Link to="/contacts">CONTACTS</Link>
          </Menu.Item>

          <Menu.Item active={pathname === '/posts'}>
            <Link to="/posts">POSTS</Link>
          </Menu.Item>

          <Menu.Item className="right menu">
            <Link to="/">HOMEPAGE</Link>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

export default MainMenu;
