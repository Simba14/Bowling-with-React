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
      },
    } = this.props
    console.log(frameScores)

    return (
      <div className='Game'>
        <Scorecard
          frames={frames}
          frameScores={frameScores}
          totalScore={frameScores.slice(-1)[0]}
        />
        <Controls
          lastRoll={pins.slice(-1)[0]}
          rolls={rolls}
        />
      </div>
    )
  }
}
