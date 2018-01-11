import Game from './Game'
import {connect} from 'react-redux'

const mapStateToProps = game => ({
  ...game,
})

export default connect(mapStateToProps)(Game)
