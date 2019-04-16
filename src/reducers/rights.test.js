import { rights } from './rights'
import * as actions from '../actions'

describe('rights', () => {
  it('should return state by default', () => {
    let expected = []
    let result = rights(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return an array of rights if the type is STORE_RIGHTS', () => {
    let mockRights = ['one', 'two']
    let mockAction = actions.storeRights(mockRights)
    let result = rights(undefined, mockAction)
    expect(result).toEqual(mockRights)
  })
})