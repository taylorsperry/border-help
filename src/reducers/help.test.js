import { help } from './help'
import * as actions from '../actions'

describe('help', () => {
  it('should return state by default', () => {
    let expected = []
    let result = help(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of help paragraphs if the type is STORE_HELP', () => {
    let mockHelp = ['para', 'para']
    let mockAction = actions.storeHelp(mockHelp)
    let result = help(undefined, mockAction)
    expect(result).toEqual(mockHelp)
  })
})