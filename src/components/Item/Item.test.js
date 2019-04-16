import React from 'react'
import { Item } from './Item'
import { shallow } from 'enzyme'

describe('Item', () => {
  let wrapper
  let mockProps = {
    key: 1,
    item: {
      title: 'title',
      detail: ['detail', 'two']
    }
  }
  beforeEach(() => {
    wrapper=shallow(<Item {...mockProps}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    let expected = {
      display: false
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should toggle the display', () => {
    let expected = {
      display: false
    }

    let mockEvent = {target: {}}

    let newState = {
      display: true
    }

    wrapper.instance()
    expect(wrapper.state()).toEqual(expected)

    wrapper.instance().toggleDetail(mockEvent)
    expect(wrapper.state()).toEqual(newState)
  })
})