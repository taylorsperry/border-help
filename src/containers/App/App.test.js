import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { fetchRights } from '../../thunks/fetchRights'
import { mockIntro } from '../../helpers/mockIntro'
import { mockRights } from '../../helpers/mockRights'
import { mockScenarios } from '../../helpers/mockScenarios'
import { mockHelp } from '../../helpers/mockHelp'
import { mapStateToProps, mapDispatchToProps } from './App'

jest.mock('../../thunks/fetchRights')


describe('App', () => {
  let wrapper;
  const mockFetchIntro = jest.fn()
  const mockProps = {
    fetchIntro: mockFetchIntro
  }

  beforeEach(() => {
    wrapper = shallow(<App {...mockProps} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {

    it('should call fetchIntro', () => {
      const mockProps = {
        fetchIntro: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().componentDidMount()

      expect(wrapper.instance().props.fetchIntro).toHaveBeenCalled()
    })
  })

  describe('getRights', () => {
    
    it('should call fetchRights if there are no rights in the store', () => {
      const emptyRights = []
      wrapper = shallow(<App rights={emptyRights} fetchRights={jest.fn()}/>)
      // const spy = jest.spyOn(wrapper.instance(), 'fetchRights')

      wrapper.instance().getRights()
      expect(wrapper.instance().props.fetchRights).toHaveBeenCalled()
      // expect(spy).toHaveBeenCalled()
    })

    it('should not call fetchRights if there are rights in the store', () => {
      const mockProps = {
        rights: mockRights,
        history: { push: jest.fn() },
        fetchRights: jest.fn()
      }
      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().getRights()

      expect(wrapper.instance().props.fetchRights).not.toHaveBeenCalled()
    })
  })

  describe('getScenarios', () => {
    
    it('should call fetchScenarios if there are no scenarios in the store', () => {
      const emptyScenarios = []
      const mockProps = {
        scenarios: emptyScenarios,
        history: { push: jest.fn() },
        fetchScenarios: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().getScenarios()

      expect(wrapper.instance().props.fetchScenarios).toHaveBeenCalled()
    })

    it('should not call fetchScenarios if there are scenarios in the store', () => {
      const mockProps = {
        scenarios: mockScenarios,
        history: { push: jest.fn() },
        fetchScenarios: jest.fn()
      }
      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().getScenarios()

      expect(wrapper.instance().props.fetchScenarios).not.toHaveBeenCalled()
    })
  })

  describe('getHelp', () => {
    
    it('should call fetchHelp if there is no help in the store', () => {
      const emptyHelp = []
      const mockProps = {
        help: emptyHelp,
        history: { push: jest.fn() },
        fetchHelp: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().getHelp()

      expect(wrapper.instance().props.fetchHelp).toHaveBeenCalled()
    })

    it('should not call fetchHelp if there is help in the store', () => {
      const mockProps = {
        help: mockHelp,
        history: { push: jest.fn() },
        fetchHelp: jest.fn()
      }
      wrapper = shallow(<App {...mockProps} />)

      wrapper.instance().getHelp()

      expect(wrapper.instance().props.fetchHelp).not.toHaveBeenCalled()
    })
  })


  describe('mapStateToProps', () => {
    it('should return a state object', () => {
      const mockState = {
        intro: mockIntro,
        rights: mockRights,
        scenarios: mockScenarios,
        help: mockHelp
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(mockState)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should dispatch fetchRights if props.fetchRights is called', () => {
    const mockDispatch = jest.fn()
    const mockUrl = 'www.url.com'
    const mockActionToDispatch = fetchRights(mockUrl)
    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.fetchRights(mockRights)
    expect(mockDispatch).toHaveBeenCalledWith(mockActionToDispatch)
    })
  })

})

