import React, { Component } from 'react';
import './App.css';
import HeaderBar from './app/components/layout/header/HeaderBar';
import MainContent from './app/components/layout/content/MainContent';
 
class App extends Component {
  render() {
    return (
        <React.Fragment>
          <HeaderBar/>
          <MainContent/>
        </React.Fragment>
    );
  }
}

export default App;
