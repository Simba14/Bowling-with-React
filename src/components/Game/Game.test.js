import React from 'react'
import Game from './Game'
import {shallow} from 'enzyme'

describe ('Game', () => {
  it.skip('should render a Scorecard component', () => {
    const frames = []
    const frameScores = []
    const gameOver = false
    const pins = []
    const rolls = 0
    const wrapper = shallow(
      <Game
        frames={frames}
        frameScores={frameScores}
        gameOver={gameOver}
        pins={pins}
        rolls={rolls}
      />
    )
    expect(wrapper.contains('div')).toEqual(true)
  })
})
