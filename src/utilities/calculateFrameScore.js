import isBonusRoll from './isBonusRoll'
import isEven from './isEven'
import isStrike from './isStrike'
import isSpare from './isSpare'
import strikeBonus from './strikeBonus'
import getFrameIndex from './getFrameIndex'

export default const calculateFrameScore = (rolls, frames, frameScores, pins, lastScore) => {
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
