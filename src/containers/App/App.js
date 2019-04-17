import React, { Component } from 'react';
import { withRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './_App.scss';
import Intro from '../../components/Intro/Intro'
import Nav from '../../components/Nav/Nav'
import Category from '../../components/Category/Category'
import Location from '../Location/Location'
import { fetchRights } from '../../thunks/fetchRights'
import { fetchScenarios } from '../../thunks/fetchScenarios'
import { fetchHelp } from '../../thunks/fetchHelp'
import { fetchIntro } from '../../thunks/fetchIntro'
import Error from '../../components/Error/Error'
import PropTypes from 'prop-types'

export class App extends Component {

 async componentDidMount() {
    const url = 'http://localhost:3001/api/v1/intro'
    await this.props.fetchIntro(url)
  }

  getRights = () => {
    const url = 'http://localhost:3001/api/v1/rights/'
    const { history, rights } = this.props
    if (!rights.length) {
      this.props.fetchRights(url)
    } else {
      history.push('/rights')
    }
  }
  
  getScenarios = () => {
    const url = 'http://localhost:3001/api/v1/scenarios'
    const { history, scenarios } = this.props
    if (!scenarios.length) {
      this.props.fetchScenarios(url)
    } else {
      history.push('/scenarios')
    }
  }

  getHelp = () => {
    const url = 'http://localhost:3001/api/v1/help'
    const { history, help } = this.props
    if (!help.length) {
      this.props.fetchHelp(url)
    } else {
      history.push('/help')
    }
  }

  render() {
    const { intro, rights, scenarios, help } = this.props
    return (
      <div className="App">
        <header className='header'>
          <Link to='/'
                className='header-link'
          >
            <h1 className='logo'>BorderHelp</h1>
          </Link>
        </header>
          <Route 
            path='/'
            render={() => <Nav getRights={this.getRights} getScenarios={this.getScenarios} getHelp={this.getHelp} />}
          />
          <div className='container'>
          <Switch>
            <Route 
              exact path='/'
              render={() => <Intro data={intro}/>}
              />
            <Route 
              exact path='/rights'
              render={() => <Category key='rights' catName='Your Rights' data={rights} callFetch={this.getRights} />}
            />
            <Route 
              exact path='/what-to-do'
              render={() => <Category key='scen' catName='What to do if . . . ' data={scenarios} callFetch={this.getScenarios} />}
            />
            <Route 
              exact path='/help'
              render={() => <Category key='help' catName='Help' data={help} callFetch={this.getHelp} />}
            />
            <Route 
              exact path='/location'
              render={() => <Location />} 
            />
            <Route component={Error} />
          </Switch>
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
})

export const mapDispatchToProps = (dispatch) => ({
  fetchIntro: (url) => dispatch(fetchIntro(url)),
  fetchRights: (url) => dispatch(fetchRights(url)),
  fetchScenarios: (url) => dispatch(fetchScenarios(url)),
  fetchHelp: (url) => dispatch(fetchHelp(url))
})

App.propTypes = {
  intro: PropTypes.array,
  rights: PropTypes.array,
  scenarios: PropTypes.array,
  help: PropTypes.array,
  fetchIntro: PropTypes.func,
  fetchRights: PropTypes.func,
  fetchScenarios: PropTypes.func,
  fetchHelp: PropTypes.func
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
