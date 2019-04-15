export const storeIntro = (intro) => ({
  type: 'STORE_INTRO',
  intro
})

export const storeRights = (rights) => ({
  type: 'STORE_RIGHTS',
  rights
})

export const storeScenarios = (scenarios) => ({
  type: 'STORE_SCENARIOS',
  scenarios
})

export const storeHelp = (help) => ({
  type: 'STORE_HELP',
  help
})

export const storeLocation = (location) => ({
  type: 'STORE_LOCATION',
  location
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasErrored = (message) => ({
  type: 'HAS_ERRORED',
  message
})

export const storeBorder = (coordinates) => ({
  type: 'STORE_BORDER',
  coordinates
})

