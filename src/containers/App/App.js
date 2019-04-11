import React, { Component } from 'react';
import './App.css';
import Nav from '../../components/Nav/Nav'
import Category from '../../components/Category/Category'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          BorderHelp
        </header>
        <Nav />
        <Category />
      </div>
    );
  }
}

export default App;
