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
        gameOver,
        pins,
        rolls,
      },
    } = this.props

    return (
      <div className='Game'>
        <Scorecard
          frames={frames}
          frameScores={frameScores}
          totalScore={frameScores.slice(-1)[0]}
        />
        <Controls
          gameOver={gameOver}
          lastRoll={pins.slice(-1)[0]}
          rolls={rolls}
        />
      </div>
    )
  }
}
