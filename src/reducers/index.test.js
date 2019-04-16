import { rootReducer } from './index'
import { createStore } from 'redux'
import { border } from './border'


describe('rootReducer', () => {
  it('should return a store', () => {
    let store = createStore(rootReducer)
    expect(store.getState().border).toEqual(border(undefined, {}))
  })
})