import {createAction} from 'redux-actions'
import mapValues from 'lodash.mapvalues'
import * as utilities from './utilities'

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

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      return {
        ...state,
        rolls: utilities.updateCurrentRoll(state.rolls, action.payload),
        pins: state.pins.concat(action.payload),
        frames: utilities.updateFrames(state.rolls, action.payload, state.frames),
        frameScores: utilities.calculateFrameScore(state.rolls, state.frames, state.frameScores, state.pins, action.payload),
        gameOver: utilities.isGameOver(state.rolls, action.payload, state.pins)
      }
    case types.restart:
      return initialState
    default:
    return state
  }
}
