import { combineReducers } from 'redux'
import { intro } from './intro'
import { rights } from './rights'
import { scenarios } from './scenarios'
import { help } from './help'
import { location } from './location'

export const rootReducer = combineReducers({
  intro,
  rights,
  scenarios,
  help,
  location,
})