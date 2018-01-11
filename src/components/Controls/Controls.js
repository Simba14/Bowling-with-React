import React, {Component} from 'react'

import './Controls.css'

export default class Controls extends Component {
  handleClick = pins => {
    this.props.updateTotalScore(pins)
    this.props.enterScore(pins)
  }

  render () {
    return (
      <div className='Container'>
        <button id='pin0' onClick={() => this.handleClick(0)}>0</button>
        <button id='pin1' onClick={() => this.handleClick(1)}>1</button>
        <button id='pin2' onClick={() => this.handleClick(2)}>2</button>
        <button id='pin3' onClick={() => this.handleClick(3)}>3</button>
        <button id='pin4' onClick={() => this.handleClick(4)}>4</button>
        <button id='pin5' onClick={() => this.handleClick(5)}>5</button>
        <button id='pin6' onClick={() => this.handleClick(6)}>6</button>
        <button id='pin7' onClick={() => this.handleClick(7)}>7</button>
        <button id='pin8' onClick={() => this.handleClick(8)}>8</button>
        <button id='pin9' onClick={() => this.handleClick(9)}>9</button>
        <button id='pin10' onClick={() => this.handleClick(10)}>10</button>
      </div>
    )
  }
}
