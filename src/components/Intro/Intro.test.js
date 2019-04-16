import React from 'react'
import { Intro } from './Intro'
import { shallow } from 'enzyme'

describe('Intro', () => {
  let wrapper
  it('should match the snapshot', () => {
    let mockProps = {
      data: ['one', 'two']
    }
    wrapper = shallow(<Intro {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})