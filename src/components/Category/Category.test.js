import React from 'react'
import { Category } from './Category'
import { shallow } from 'enzyme'

describe('Category', () => {
  let wrapper
  it('should match the snapshot', () => {
    let mockProps = {
      catName: 'name',
      data: ['one', 'two'],
      callFetch: jest.fn()
    }
    wrapper = shallow(<Category {...mockProps}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('should callFetch if !data.length', () => {
    let mockProps = {
      catName: 'name',
      data: [],
      callFetch: jest.fn()
    }
    wrapper = shallow(<Category {...mockProps}/>)
    expect(wrapper.instance().props.callFetch).toHaveBeenCalled()
  })
})