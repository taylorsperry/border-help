import { loading } from './loading'
import * as actions from '../actions'

describe('loading', () => {
  it('should return state by default', () => {
    let expected = false
    let result = loading(undefined, {})
    expect(result).toEqual(expected)
  })
  it('should return a boolean if type is isLoading', () => {
    let mockBool = true
    let mockAction = actions.isLoading(mockBool)
    let result = loading(undefined, mockAction)
    expect(result).toEqual(mockBool)
  })
})