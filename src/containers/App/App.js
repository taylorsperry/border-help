import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './_App.scss';
import { storeIntro, storeRights, storeScenarios, storeHelp, storeLocation } from '../../actions/'
import Intro from '../../components/Intro/Intro'
import Nav from '../../components/Nav/Nav'
import Category from '../../components/Category/Category'
import Location from '../../components/Location/Location'

export class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     rights: [],
  //     scenarios: [],
  //     intro: [],
  //     help: [],
  //   }
  // }

  async componentDidMount() {
    const url = 'http://localhost:3001/api/v1/intro'
    try {
      const response = await fetch(url)
      const intro = await response.json()
      this.props.storeIntro(intro)
    } catch (error) {
      return error.message
    }
  }

  getRights = () => {
    const { history, rights } = this.props
    if (!rights.length) {
      
      this.fetchRights()
    } else {
      history.push('/rights')
    }
  }

  getScenarios = () => {
    const { history, scenarios } = this.props
    if (!scenarios.length) {
      this.fetchScenarios()
    } else {
      history.push('/scenarios')
    }
  }

  getHelp = () => {
    const { history, help } = this.props
    if (!help.length) {
      this.fetchHelp()
    } else {
      history.push('/help')
    }
  }

  
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) =>  {
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
      this.props.storeLocation([longitude, latitude])
      });
  }

  fetchRights = async () => {
    const url = 'http://localhost:3001/api/v1/rights/'
    try {
      const response = await fetch(url)
      const rights = await response.json()
      this.props.storeRights(rights)
    } catch (error) {
      return error.message
    }
  }

  fetchScenarios = async () => {
    const url = 'http://localhost:3001/api/v1/scenarios/'
    try {
      const response = await fetch(url)
      const scenarios = await response.json()
      this.props.storeScenarios(scenarios)
    } catch (error) {
      return error.message
    }
  }

  fetchHelp = async () => {
    const url = 'http://localhost:3001/api/v1/help'
    try {
      const response = await fetch(url)
      const help = await response.json()
      this.props.storeHelp(help)
    } catch (error) {
      return error.message
    }
  }

  render() {
    const { intro, rights, scenarios, help } = this.props
    return (
      <div className="App">
        <header className='header'>
          <h1 className='logo'>BorderHelp</h1>
        </header>
          <Route 
            path='/'
            render={() => <Nav getRights={this.getRights} getScenarios={this.getScenarios} getHelp={this.getHelp} getLocation={this.getLocation} />}
          />
          <div className='container'>
          <Route 
            exact path='/'
            render={() => <Intro data={intro}/>}
            />
          <Route 
            path='/rights'
            render={() => <Category catName='Your Rights' data={rights} />}
          />
          <Route 
            path='/what-to-do'
            render={() => <Category catName='What to Do' data={scenarios} />}
          />
          <Route 
            path='/help'
            render={() => <Category catName='Help' data={help} />}
          />
          <Route 
            path='/location'
            render={() => <Location />} 
          />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  intro: state.intro,
  rights: state.rights,
  scenarios: state.scenarios,
  help: state.help,
  location: state.location,
})

export const mapDispatchToProps = (dispatch) => ({
  storeIntro: (intro) => dispatch(storeIntro(intro)) ,
  storeRights: (rights) => dispatch(storeRights(rights)),
  storeScenarios: (scenarios) => dispatch(storeScenarios(scenarios)),
  storeHelp: (help) => dispatch(storeHelp(help)),
  storeLocation: (location) => dispatch(storeLocation(location)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
