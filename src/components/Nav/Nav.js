import React from 'react'
import { NavLink } from 'react-router-dom'
import './_Nav.scss'

export const Nav = ( {getRights, getScenarios} ) => {
  return (
    <div className='nav-container'>
      <NavLink 
        onClick={getRights}
        exact to='/rights'
      >
        Your Rights
      </NavLink>
      <NavLink
        onClick={getScenarios}
        exact to='/scenarios'
      >
      What to Do
      </NavLink>
      <div>Help</div>
    </div>
  )
}

export default Nav