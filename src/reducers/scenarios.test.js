import { scenarios } from './scenarios'
import * as actions from '../actions'

describe('scenarios', () => {
  it('should return state by default', () => {
    let expected = []
    let result = scenarios(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an array of scenarios if the type is STORE_SCENARIOS', () => {
    let mockScenarios = ['one', 'two']
    let mockAction = actions.storeScenarios(mockScenarios)
    let result = scenarios(undefined, mockAction)
    expect(result).toEqual(mockScenarios)
  })
})