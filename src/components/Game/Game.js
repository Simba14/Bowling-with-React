import React, {Component} from 'react'

import Scorecard from '../Scorecard'

export default class Game extends Component {
  render () {
    const {
      game: {
        frameScores,
        totalScore,
        scores,
      },
    } = this.props
    // console.log(frameScores)
    return (
      <Scorecard
        frameScores={frameScores}
        scores={scores}
        totalScore={totalScore}
      />
    )
  }
}
