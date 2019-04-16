import { error } from './error'
import * as actions from '../actions'

describe('error', () => {
  it('should return an empty string by default', () => {
    let expected = ''
    let result = error(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a string if the action type is HAS_ERRORED', () => {
    let mockMessage = 'bad'
    let mockAction = actions.hasErrored(mockMessage)
    let result = error(undefined, mockAction)
    expect(result).toEqual(mockMessage)
  })
})