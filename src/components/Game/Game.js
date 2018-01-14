import React, {Component} from 'react'

import Scorecard from '../Scorecard'

export default class Game extends Component {
  render () {
    const {
      game: {
        frameScores,
        totalScore,
        frames,
      },
    } = this.props
    // console.log(frames)
    return (
      <Scorecard
        frameScores={frameScores}
        frames={frames}
        totalScore={totalScore}
      />
    )
  }
}
