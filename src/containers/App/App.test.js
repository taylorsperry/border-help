import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
// import { storeRights, storeScenarios } from '../../actions'
import { mockIntro } from '../../helpers/mockIntro'
import { mockRights } from '../../helpers/mockRights'
import { mockScenarios } from '../../helpers/mockScenarios'
import { mockHelp } from '../../helpers/mockHelp'

jest.mock('../../actions')


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('componentDidMount', () => {

    it('should call fetch and return an array of introductory paragraphs', async () => {
      const mockProps = {
        storeIntro: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockIntro)
      }))

      wrapper.instance().componentDidMount()
      const response = await window.fetch()
      const intro = await response.json()

      expect(intro).toEqual(mockIntro)
    })
  })

  describe('getRights', () => {
    
    it('should call fetchRights if there are no rights in the store', () => {
      const emptyRights = []
      wrapper = shallow(<App rights={emptyRights} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchRights')

      wrapper.instance().getRights()
      
      expect(spy).toHaveBeenCalled()
    })

    it('should not call fetchRights if there are rights in the store', () => {
      const mockProps = {
        rights: mockRights,
        history: { push: jest.fn() }
      }
      wrapper = shallow(<App {...mockProps} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchRights')

      wrapper.instance().getRights()

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('getScenarios', () => {
    
    it('should call fetchScenarios if there are no scenarios in the store', () => {
      const emptyScenarios = []
      const mockProps = {
        scenarios: emptyScenarios,
        history: { push: jest.fn() }

      }
      wrapper = shallow(<App {...mockProps} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchScenarios')

      wrapper.instance().getScenarios()

      expect(spy).toHaveBeenCalled()
    })

    it('should not call fetchScenarios if there are scenarios in the store', () => {
      const mockProps = {
        scenarios: mockScenarios,
        history: { push: jest.fn() }
      }
      wrapper = shallow(<App {...mockProps} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchScenarios')

      wrapper.instance().getScenarios()

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('getHelp', () => {
    
    it('should call fetchHelp if there is no help in the store', () => {
      const emptyHelp = []
      const mockProps = {
        help: emptyHelp,
        history: { push: jest.fn() }
      }
      wrapper = shallow(<App {...mockProps} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchHelp')

      wrapper.instance().getHelp()

      expect(spy).toHaveBeenCalled()
    })

    it('should not call fetchHelp if there is help in the store', () => {
      const mockProps = {
        help: mockHelp,
        history: { push: jest.fn() }
      }
      wrapper = shallow(<App {...mockProps} />)
      const spy = jest.spyOn(wrapper.instance(), 'fetchHelp')

      wrapper.instance().getHelp()

      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('fetchRights', async () => {

    beforeEach(() => {
      const mockProps = {
        storeRights: jest.fn()
      }
      
      wrapper = shallow(<App {...mockProps} />)
      
      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockRights)
      }))
    })

    it('should call fetch and return an array of rights', async () => {

      wrapper.instance().fetchRights()

      const response = await window.fetch()
      const rights = await response.json()
      
      expect(window.fetch).toHaveBeenCalled()
      expect(rights).toEqual(mockRights)
    })

    it.skip('should dispatch storeRights with the response from the fetch', async () => {
      const response = await window.fetch()
      const rights = await response.json()
      
      expect(window.fetch).toHaveBeenCalled()
      expect(wrapper.props.storeRights).toHaveBeenCalledWith(rights)
    })
  })

  describe('fetchScenarios', () => {

    beforeEach(() => {
      const mockProps = {
        storeScenarios: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      window.fetch = jest.fn().mockImplementation( () => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockScenarios)
      }))
    })

    it('should call fetch and return an array of scenarios', async () => {
      
      wrapper.instance().fetchScenarios()
      const response = await window.fetch()
      const scenarios = await response.json()

      expect(scenarios).toEqual(mockScenarios)
    })

    it.skip('should dispatch storeScenarios with the response from the fetch', () => {

    })
  })

  describe('fetchHelp', () => {

    beforeEach(() => {
      const mockProps = {
        storeHelp: jest.fn()
      }

      wrapper = shallow(<App {...mockProps} />)

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockHelp)
      }))
    })

    it('should call fetch and return an array of help', async () => {

      wrapper.instance().fetchHelp()
      const response = await window.fetch()
      const help = await response.json()

      expect(help).toEqual(mockHelp)
    })
  })

})

