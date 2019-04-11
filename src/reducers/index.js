import { combineReducers } from 'redux'
import { intro } from './intro'
import { rights } from './rights'
import { scenarios } from './scenarios'
import { help } from './help'

export const rootReducer = combineReducers({
  intro,
  rights,
  scenarios,
  help,
})