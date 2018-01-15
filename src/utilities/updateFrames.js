import isEven from './isEven'
import isBonusRoll from './isBonusRoll'
import getFrameIndex from './getFrameIndex'

const updateFrames = (rolls, lastScore, frames) => {
  if (isEven(rolls) && !isBonusRoll(rolls)) {
    return frames.concat([[lastScore]])
  } else {
    const newFrameScore = frames[getFrameIndex(frames)].concat([lastScore])
    return frames.slice(0, getFrameIndex(frames)).concat([newFrameScore])
  }
}

export default updateFrames
