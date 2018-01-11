import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const types = {
  enterScore: 'Game/EnterScore',
  updateTotalScore: 'Game/UpdateTotalScore',
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  currentFrame: 1,
  currentRoll: 1,
  totalScore: 0,
  scores: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      state.scores.push(action.payload)
      return {
        ...state,
        scores: state.scores
      }
    case types.updateTotalScore:
      return {
        ...state,
        totalScore: state.totalScore + action.payload
      }
    default:
    return state
  }
}
