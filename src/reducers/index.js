import { combineReducers } from 'redux'
import { intro } from './intro'
import { scenarios } from './scenarios'
import { help } from './help'
import { rights } from './rights'
import { border } from './border'
import { loading } from './loading'
import { error } from './error'

export const rootReducer = combineReducers({
  intro,
  rights,
  scenarios,
  help,
  border,
  loading,
  error
})