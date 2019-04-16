import { intro } from './intro'
import * as actions from '../actions'

describe('intro', () => {
  it('should return state by default', () => {
    let expected = []
    let result = intro(undefined, [])
    expect(result).toEqual(expected) 
  })

  it('should return an array of paragraphs if the type is STORE_INTRO', () => {
    let mockIntro = ['para', 'para']
    let mockAction = actions.storeIntro(mockIntro)
    let result = intro(undefined, mockAction)
    expect(result).toEqual(mockIntro)
  })
})