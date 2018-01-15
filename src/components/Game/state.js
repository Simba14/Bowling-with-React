import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'

const types = {
  enterScore: 'Game/EnterScore',
  restart: 'Game/Restart',
  updateTotalScore: 'Game/UpdateTotalScore',
}

export const actions = mapValues(types, type => createAction(type))

const initialState = {
  rolls: 0,
  totalScore: 0,
  pins: [],
  frames: [],
  frameScores: [],
  gameOver: false,
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

const isGameOver = (rolls, lastScore, pins) => {
  const GameNotOver =
    rolls < 19 || (rolls === 19 && (isSpare(lastScore, pins.slice(-1)[0]) || isStrike(pins.slice(-1)[0])))
  return !GameNotOver
}

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

const calculateFrameScore = (rolls, frames, frameScores, pins, lastScore) => {
  if ((!isEven(rolls) && !isStrike(lastScore) && !isSpare(pins.slice(-1)[0], lastScore)) || isBonusRoll(rolls)) {
    const frameScore = isBonusRoll(rolls) ?
      frames[getFrameIndex(frames)].slice(-1)[0] + frames[getFrameIndex(frames)].slice(-2)[0] + lastScore
      : frames[getFrameIndex(frames)].slice(-1)[0] + lastScore

    if (isStrike(pins.slice(-2)[0]) && rolls > 2) {
      return frameScores.concat(strikeBonus(pins.slice(-1)[0], lastScore), frameScore)
    }
    const updatedFrameScores = frameScores.concat(frameScore)
    return updatedFrameScores
  } else if (isStrike(pins.slice(-2)[0]) && rolls > 2) {
      return frameScores.concat(strikeBonus(pins.slice(-1)[0], lastScore))
  } else if (isEven(rolls) && isSpare(pins.slice(-2)[0], pins.slice(-1)[0])) {
    const spareFrame = 10 + lastScore
    return frameScores.concat(spareFrame)
  }
  return frameScores
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      return {
        ...state,
        rolls: updateCurrentRoll(state.rolls, action.payload),
        pins: state.pins.concat(action.payload),
        frames: updateFrames(state.rolls, action.payload, state.frames),
        frameScores: calculateFrameScore(state.rolls, state.frames, state.frameScores, state.pins, action.payload),
        gameOver: isGameOver(state.rolls, action.payload, state.pins)
      }
    case types.restart:
      return initialState
    default:
    return state
  }
}
