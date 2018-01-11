import React, {Component} from 'react'

import './Controls.css'

export default class Controls extends Component {
  render () {
    return (
      <div className='Container'>
        <button id='pin0'>0</button>
        <button id='pin1'>1</button>
        <button id='pin2'>2</button>
        <button id='pin3'>3</button>
        <button id='pin4'>4</button>
        <button id='pin5'>5</button>
        <button id='pin6'>6</button>
        <button id='pin7'>7</button>
        <button id='pin8'>8</button>
        <button id='pin9'>9</button>
        <button id='pin10'>10</button>
      </div>
    )
  }
}
