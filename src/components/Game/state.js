import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const types = {
  updateScore: 'Game/UpdateScore',
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  currentFrame: 1,
  currentRoll: 1,
  totalScore: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.updateScore:
      return {
        ...state,
        totalScore: state.totalScore + action.payload
      }
    default:
    return state
  }
}
