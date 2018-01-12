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
  frameScores: [],
}

const calculateFrameScore = (state, lastRoll) => {
  if (state.currentRoll % 2 === 0) {
    const frameScore = state.scores.slice(-1)[0] + lastRoll
    const updatedFrameScores = state.frameScores.concat(frameScore)
    return updatedFrameScores
  }
  return state.frameScores
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      return {
        ...state,
        currentRoll: state.currentRoll + 1,
        scores: state.scores.concat([action.payload]),
        frameScores: calculateFrameScore(state, action.payload),
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
