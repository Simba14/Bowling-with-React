import isBonusRoll from './isBonusRoll'
import isEven from './isEven'
import isStrike from './isStrike'
import isSpare from './isSpare'
import strikeBonus from './strikeBonus'
import getFrameIndex from './getFrameIndex'

const updateCumulativeScore = (rolls, frames, cumulativeScores, pins, lastScore) => {

  const currentScore = cumulativeScores.slice(-1)[0] || 0

  if ((!isEven(rolls) && !isStrike(lastScore) && !isSpare(pins.slice(-1)[0], lastScore)) || isBonusRoll(rolls)) {
    const frameScore = isBonusRoll(rolls) ?
      frames[getFrameIndex(frames)].slice(-1)[0] + frames[getFrameIndex(frames)].slice(-2)[0] + lastScore
      : frames[getFrameIndex(frames)].slice(-1)[0] + lastScore

    if (isStrike(pins.slice(-1)[0]) && !isStrike(pins.slice(-2)[0]) && rolls === 19) return cumulativeScores
    if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
      const bonus = strikeBonus(pins.slice(-1)[0], lastScore)
      const previousFrame = bonus + currentScore
      return isStrike(pins.slice(-1)[0]) && rolls === 19 ?
        cumulativeScores.concat(previousFrame)
        : cumulativeScores.concat(previousFrame, frameScore + previousFrame)
    }
    const updatedFrameScores = cumulativeScores.concat(currentScore + frameScore)
    return updatedFrameScores
  } else if (isStrike(pins.slice(-2)[0]) && rolls > 2 && rolls < 20) {
      const bonus = strikeBonus(pins.slice(-1)[0], lastScore)
      return cumulativeScores.concat(currentScore + bonus)
  } else if (isEven(rolls) && isSpare(pins.slice(-2)[0], pins.slice(-1)[0])) {
    const spareFrame = 10 + lastScore
    return cumulativeScores.concat(currentScore + spareFrame)
  }
  return cumulativeScores
}

export default updateCumulativeScore
