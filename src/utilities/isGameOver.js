import isSpare from './isSpare'

export default const isGameOver = (rolls, lastScore, pins) => {
  const GameNotOver =
    rolls < 19 || (rolls === 19 && (isSpare(lastScore, pins.slice(-1)[0]) || isStrike(pins.slice(-1)[0])))
  return !GameNotOver
}
