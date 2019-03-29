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
import MainMenu from './components/layout/MainMenu';

//Wrapper principale dell'applicazione
//Renderizza le diverse sezioni a seconda della voce del menu selezionata
class App extends Component {

  render() {
    return (
      //Collegamento allo store.js per comunicazioni back-end (se serviranno)
      <Provider store={store}>

        <div className="App">
          <header className="App-header">
            <h1 className="header-content-inner">TECNOLOGIE DIMENTICATE</h1>
          </header>
        </div>

        <Container>

          <BrowserRouter>
            <Route path="/" component={MainMenu} location={this.props.location} />
            <Route path="/" exact component={HomePage} location={this.props.location} />
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
