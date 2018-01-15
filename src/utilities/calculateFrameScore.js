import isBonusRoll from './isBonusRoll'
import isEven from './isEven'
import isStrike from './isStrike'
import isSpare from './isSpare'
import strikeBonus from './strikeBonus'
import getFrameIndex from './getFrameIndex'

const calculateFrameScore = (rolls, frames, frameScores, pins, lastScore) => {
  console.log((!isStrike(pins.slice(-1)[0]) && rolls === 19))
  console.log(!isEven(rolls) && !isStrike(lastScore) && !isSpare(pins.slice(-1)[0], lastScore))
  const currentScore = frameScores.slice(-1)[0] || 0
  if ((!isEven(rolls) && !isStrike(lastScore) && !isSpare(pins.slice(-1)[0], lastScore) &&  (!isStrike(pins.slice(-1)[0]) && rolls === 19)) || isBonusRoll(rolls)) {
    const frameScore = isBonusRoll(rolls) ?
      frames[getFrameIndex(frames)].slice(-1)[0] + frames[getFrameIndex(frames)].slice(-2)[0] + lastScore
      : frames[getFrameIndex(frames)].slice(-1)[0] + lastScore

    if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
      const bonus = strikeBonus(pins.slice(-1)[0], lastScore)
      const previousFrame = bonus + currentScore
      return frameScores.concat(previousFrame, frameScore + previousFrame)
    }
    const updatedFrameScores = frameScores.concat(currentScore + frameScore)
    return updatedFrameScores
  } else if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
      const bonus = strikeBonus(pins.slice(-1)[0], lastScore)
      return frameScores.concat(currentScore + bonus)
  } else if (isEven(rolls) && isSpare(pins.slice(-2)[0], pins.slice(-1)[0])) {
    const spareFrame = 10 + lastScore
    return frameScores.concat(currentScore + spareFrame)
  }
  return frameScores
}

export default calculateFrameScore
