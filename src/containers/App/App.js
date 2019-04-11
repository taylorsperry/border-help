import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Nav from '../../components/Nav/Nav'
import Category from '../../components/Category/Category'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rights: [],
      scenarios: [],
    }
  }

  getRights = () => {
    this.fetchRights()
  }

  getScenarios = () => {
    this.fetchScenarios()
  }

  fetchRights = async () => {
    const url = 'http://localhost:3001/api/v1/rights/'
    try {
      const response = await fetch(url)
      const rights = await response.json()
      this.setState({
        rights,
      })
    } catch (error) {
      return error.message
    }
  }

  fetchScenarios = async () => {
    const url = 'http://localhost:3001/api/v1/scenarios/'
    try {
      const response = await fetch(url)
      const scenarios = await response.json()
      this.setState({
        scenarios,
      })
    } catch (error) {
      return error.message
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          BorderHelp
        </header>
        <Route 
          path='/'
          render={() => <Nav getRights={this.getRights} getScenarios={this.getScenarios} />}
        />
        <Route 
          path='/rights'
          render={() => <Category data={this.state.rights} />}
        />
      </div>
    );
  }
}

export default App;
