import React, {Component} from 'react'

import Scorecard from '../Scorecard'

export default class Game extends Component {
  render () {
    const {
      game: {
        totalScore,
      },
    } = this.props
    console.log(totalScore)
    return (
      <Scorecard totalScore={totalScore}/>
    )
  }
}
