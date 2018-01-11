import React, {Component} from 'react'

import Scorecard from '../Scorecard'

export default class Game extends Component {
  render () {
    const {
      game: {
        totalScore,
        scores,
      },
    } = this.props

    console.log(scores)
    return (
      <Scorecard scores={scores} totalScore={totalScore}/>
    )
  }
}
