import React, {Component} from 'react'

import Scorecard from '../Scorecard'

export default class Game extends Component {
  render () {
    console.log(this.props)
    return (
      <Scorecard />
    )
  }
}
