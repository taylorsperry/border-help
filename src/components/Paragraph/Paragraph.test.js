import React from 'react'
import { Paragraph } from './Paragraph'
import { shallow } from 'enzyme'

describe('Paragraph', () => {
  let wrapper
  it('should match the snapshot', () => {
    let mockProps = {
      key: 1,
      para: 'para'
    }
    wrapper = shallow(<Paragraph {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})