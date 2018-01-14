import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const types = {
  enterScore: 'Game/EnterScore',
  updateTotalScore: 'Game/UpdateTotalScore',
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  rolls: 0,
  totalScore: 0,
  pins: [],
  frames: [],
  frameScores: [],
}

const isEven = number =>
  number % 2 === 0

const isStrike = pins => {
  const strike = 10
  return pins === strike
}

const strikeBonus = (roll1, roll2) =>
  10 + roll1 + roll2

const isSpare = (roll1, roll2) =>
  roll1 + roll2 === 10


const isBonusRoll = rolls => {
  const bonusRoll = 20
  return rolls === bonusRoll
}

const getFrameIndex = frames =>
  frames.length - 1


const updateCurrentRoll = (rolls, lastScore) => {
  if (isStrike(lastScore) && isEven(rolls) && rolls < 18) {
    return rolls + 2
  } else {
    return rolls + 1
  }
}

const updateFrames = (rolls, lastScore, frames) => {
  if (isEven(rolls) && !isBonusRoll(rolls)) {
    return frames.concat([[lastScore]])
  } else {
    const newFrameScore = frames[getFrameIndex(frames)].concat([lastScore])
    return frames.slice(0, getFrameIndex(frames)).concat([newFrameScore])
  }
}

const calculateFrameScore = (state, lastScore) => {
  if ((!isEven(state.rolls) && !isStrike(lastScore) && !isSpare(state.pins.slice(-1)[0], lastScore)) || isBonusRoll(state.rolls)) {

    const frameScore = isBonusRoll(state.rolls) ?
      state.frames[getFrameIndex(state.frames)].slice(-1)[0] + state.frames[getFrameIndex(state.frames)].slice(-2)[0] + lastScore
      : state.frames[getFrameIndex(state.frames)].slice(-1)[0] + lastScore

    if (isStrike(state.pins.slice(-2)[0]) && state.rolls > 2) {
      return state.frameScores.concat(strikeBonus(state.pins.slice(-1)[0], lastScore), frameScore)
    }
    const updatedFrameScores = state.frameScores.concat(frameScore)
    return updatedFrameScores
  // } else if (isStrike(lastScore) && state.rolls < 18) {
  //   return state.frameScores
  } else if (isEven(state.rolls) && isSpare(state.pins.slice(-2)[0], state.pins.slice(-1)[0])) {
    const spareFrame = 10 + lastScore
    return state.frameScores.concat(spareFrame)
  }
  return state.frameScores
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      return {
        ...state,
        rolls: updateCurrentRoll(state.rolls, action.payload),
        pins: state.pins.concat(action.payload),
        frames: updateFrames(state.rolls, action.payload, state.frames),
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
