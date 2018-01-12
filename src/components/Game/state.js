import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const types = {
  enterScore: 'Game/EnterScore',
  updateTotalScore: 'Game/UpdateTotalScore',
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  currentFrame: 1,
  rolls: 0,
  totalScore: 0,
  scores: [],
  frameScores: [],
}

const isEven = number =>
  number % 2 === 0

const isStrike = pins => {
  const strike = 10
  return pins === strike
}

const getFrameIndex = scores =>
  scores.length - 1

const updateCurrentRoll = (rolls, lastScore) => {
  if (isStrike(lastScore) && isEven(rolls)) {
    return rolls + 2
  } else {
    return rolls + 1
  }
}

const updateScores = (rolls, lastScore, scores) => {
  if (isEven(rolls)) {
    return scores.concat([[lastScore]])
  } else {
    const newFrameScore = scores[getFrameIndex(scores)].concat([lastScore])
    return scores.slice(0, getFrameIndex(scores)).concat([newFrameScore])
  }
}

const calculateFrameScore = (state, lastScore) => {
  if (!isEven(state.rolls)) {
    const frameScore = state.scores[getFrameIndex(state.scores)].slice(-1)[0] + lastScore
    const updatedFrameScores = state.frameScores.concat(frameScore)
    return updatedFrameScores
  } else if (isStrike(lastScore)) {
    return state.frameScores.concat(lastScore)
  }
  return state.frameScores
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      return {
        ...state,
        rolls: updateCurrentRoll(state.rolls, action.payload),
        scores: updateScores(state.rolls, action.payload, state.scores),
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
