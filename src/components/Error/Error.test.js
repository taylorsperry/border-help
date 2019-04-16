import React from 'react'
import { Error } from './Error'
import { shallow } from 'enzyme'

describe('Error', () => {
  let wrapper
  it('should match the snapshot',() => {
    wrapper = shallow(<Error />)
    expect(wrapper).toMatchSnapshot()
  })
})