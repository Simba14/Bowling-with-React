import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from '../Game/state'


import './Controls.css'

const mapDispatchToProps = {
  updateScore: actions.updateScore
}

class Controls extends Component {
  enterScore = pins => {
    this.props.updateScore(pins)
  }

  render () {
    return (
      <div className='Container'>
        <button id='pin0' onClick={() => this.enterScore(0)}>0</button>
        <button id='pin1' onClick={() => this.enterScore(1)}>1</button>
        <button id='pin2' onClick={() => this.enterScore(2)}>2</button>
        <button id='pin3' onClick={() => this.enterScore(3)}>3</button>
        <button id='pin4' onClick={() => this.enterScore(4)}>4</button>
        <button id='pin5' onClick={() => this.enterScore(5)}>5</button>
        <button id='pin6' onClick={() => this.enterScore(6)}>6</button>
        <button id='pin7' onClick={() => this.enterScore(7)}>7</button>
        <button id='pin8' onClick={() => this.enterScore(8)}>8</button>
        <button id='pin9' onClick={() => this.enterScore(9)}>9</button>
        <button id='pin10' onClick={() => this.enterScore(10)}>10</button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Controls)
