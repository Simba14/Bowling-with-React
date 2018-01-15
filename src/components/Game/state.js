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
  frames: [],
  frameScores: [],
  gameOver: false,
  pins: [],
  rolls: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.enterScore:
      const {
        frames,
        frameScores,
        pins,
        rolls,
      } = state

      return {
        ...state,
        frames: utilities.updateFrames(rolls, action.payload, frames),
        frameScores: utilities.calculateFrameScore(rolls, frames, frameScores, pins, action.payload),
        gameOver: utilities.isGameOver(rolls, action.payload, pins),
        pins: pins.concat(action.payload),
        rolls: utilities.updateCurrentRoll(rolls, action.payload),
      }
    case types.restart:
      return initialState
    default:
    return state
  }
}
