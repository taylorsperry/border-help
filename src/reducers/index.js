import { combineReducers } from 'redux'
import { intro } from './intro'
import { scenarios } from './scenarios'
import { help } from './help'
import { location } from './location'
import { rights } from './rights'
import { border } from './border'

export const rootReducer = combineReducers({
  intro,
  rights,
  scenarios,
  help,
  location,
  border,
})