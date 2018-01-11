import {connect} from 'react-redux'
import {actions} from '../Game/state'

import Controls from './Controls'

const mapDispatchToProps = {
  updateScore: actions.updateScore
}

export default connect(null, mapDispatchToProps)(Controls)
