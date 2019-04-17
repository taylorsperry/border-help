import React from 'react'
import { NavLink } from 'react-router-dom'
import './_Nav.scss'
import PropTypes from 'prop-types'

export const Nav = ( {getRights, getScenarios, getHelp, getLocation} ) => {
  return (
    <div className='nav-container'>
      <NavLink 
        onClick={getRights}
        exact to='/rights'
        className='nav-link'
      >
        Your Rights
      </NavLink>
      <NavLink
        onClick={getScenarios}
        exact to='/what-to-do'
        className='nav-link'
      >
        What to Do
      </NavLink>
      <NavLink
        onClick={getHelp}
        exact to='/help' 
        className='nav-link'
      >
        Help
      </NavLink>
      <NavLink
        onClick={getLocation}
        exact to='/location' 
        className='nav-link'
      >
        Your Location
      </NavLink>
    </div>
  )
}

Nav.propTypes = {
  getRights: PropTypes.func,
  getScenarios: PropTypes.func,
  getHelp: PropTypes.func,
  getLocation: PropTypes.func
}
export default Nav