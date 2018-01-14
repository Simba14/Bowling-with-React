import React, {Component} from 'react'

import Scorecard from '../Scorecard'
import Controls from '../Controls'

import './Game.css'

export default class Game extends Component {
  render () {
    const {
      game: {
        frames,
        frameScores,
        pins,
        rolls,
        totalScore,
      },
    } = this.props
    // console.log(frames)
    return (
      <div className='Game'>
        <Scorecard
          frames={frames}
          frameScores={frameScores}
          totalScore={totalScore}
        />
        <Controls
          lastRoll={pins.slice(-1)[0]}
          rolls={rolls}
        />
      </div>
    )
  }
}
