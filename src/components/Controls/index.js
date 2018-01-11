import {connect} from 'react-redux'
import {actions} from '../Game/state'

import Controls from './Controls'

const mapDispatchToProps = {
  enterScore: actions.enterScore,
  updateTotalScore: actions.updateTotalScore,
}

export default connect(null, mapDispatchToProps)(Controls)
