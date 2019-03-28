import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import PostPage from './components/pages/PostPage';
import HomePage from './components/pages/HomePage';
import WorldMap from './components/pages/WorldMap';
import TimeLine from './components/pages/TimeLine';
import Contacts from './components/pages/Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: 1900,
      finish: 2019,
      value: [1990, 2010]
    }
  }

  componentWillUpdate() {
    console.log(this.props.location);
  }

  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header">
            <h1 className="header-content-inner">TECNOLOGIE DIMENTICATE</h1>
          </header>
        </div>

        <Container>
          <BrowserRouter>
            <Route path="/" component={HomePage} location={this.props.location} />
            <Route path="/map" component={WorldMap} location={this.props.location}/>
            <Route path="/contacts" component={Contacts} location={this.props.location}/>
            <Route path="/posts" component={PostPage} location={this.props.location}/>
          </BrowserRouter>
        </Container>

      </Provider>
    );
  }
}

export default App;
