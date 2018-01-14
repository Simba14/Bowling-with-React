import React, {Component} from 'react'

import './Controls.css'

export default class Controls extends Component {
  handleClick = pins => {
    this.props.updateTotalScore(pins)
    this.props.enterScore(pins)
  }

  disableButton = number => {
    console.log(this.props.rolls)
    if (this.props.rolls % 2 === 0) return false
    if (this.props.rolls === 19 && this.props.lastRoll === 10) return false
    return this.props.lastRoll + number > 10
  }

  render () {
    return (
      <div className='Container'>
        <div>
          <button id='pin0' onClick={() => this.handleClick(0)}>0</button>
          <button id='pin1' disabled={this.disableButton(1)} onClick={() => this.handleClick(1)}>1</button>
          <button id='pin2' disabled={this.disableButton(2)} onClick={() => this.handleClick(2)}>2</button>
          <button id='pin3' disabled={this.disableButton(3)} onClick={() => this.handleClick(3)}>3</button>
          <button id='pin4' disabled={this.disableButton(4)} onClick={() => this.handleClick(4)}>4</button>
          <button id='pin5' disabled={this.disableButton(5)} onClick={() => this.handleClick(5)}>5</button>
          <button id='pin6' disabled={this.disableButton(6)} onClick={() => this.handleClick(6)}>6</button>
          <button id='pin7' disabled={this.disableButton(7)} onClick={() => this.handleClick(7)}>7</button>
          <button id='pin8' disabled={this.disableButton(8)} onClick={() => this.handleClick(8)}>8</button>
          <button id='pin9' disabled={this.disableButton(9)} onClick={() => this.handleClick(9)}>9</button>
          <button id='pin10' disabled={this.disableButton(10)} onClick={() => this.handleClick(10)}>10</button>
        </div>
        {this.props.rolls > 0 &&
          <button className={'Restart'} onClick={this.props.restart}>Restart</button>
        }
      </div>
    )
  }
}
