import { border } from './border'
import * as actions from '../actions'

describe('border', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = border(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return an array of coordinates if the action type is STORE_BORDER', () => {
    const mockCoords = [[0,1], [1,2]]
    const mockAction = actions.storeBorder(mockCoords)

    const result = border(undefined, mockAction)
    expect(result).toEqual(mockCoords)
  })
})