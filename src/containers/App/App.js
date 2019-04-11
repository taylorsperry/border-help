import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './_App.scss';
import Intro from '../../components/Intro/Intro'
import Nav from '../../components/Nav/Nav'
import Category from '../../components/Category/Category'

class App extends Component {
  constructor() {
    super();
    this.state = {
      rights: [],
      scenarios: [],
      intro: [],
      help: [],
    }
  }

  async componentDidMount() {
    const url = 'http://localhost:3001/api/v1/intro'
    try {
      const response = await fetch(url)
      const intro = await response.json()
      this.setState({
        intro
      })
    } catch (error) {
      return error.message
    }
  }

  getRights = () => {
    this.fetchRights()
  }

  getScenarios = () => {
    this.fetchScenarios()
  }

  getHelp = () => {
    this.fetchHelp()
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

  fetchHelp = async () => {
    const url = 'http://localhost:3001/api/v1/help'
    try {
      const response = await fetch(url)
      const help = await response.json()
      this.setState({
        help
      })
    } catch (error) {
      return error.message
    }
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <h1 className='logo'>BorderHelp</h1>
        </header>
          <Route 
            path='/'
            render={() => <Nav getRights={this.getRights} getScenarios={this.getScenarios} getHelp={this.getHelp}/>}
          />
          <div className='container'>
          <Route 
            exact path='/'
            render={() => <Intro />}
            />
          <Route 
            path='/rights'
            render={() => <Category data={this.state.rights} />}
          />
          <Route 
            path='/what-to-do'
            render={() => <Category data={this.state.scenarios} />}
          />
          <Route 
            path='/help'
            render={() => <Category data={this.state.help} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
