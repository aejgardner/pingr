import { connect } from 'react-redux';
import Settings from './Settings';
import { postStartGame } from '../../data/actions/api';

const mapStateToProps = ({
    player1Name,
    player2Name,
    winningScore,
    serveInterval
}) => ({
    player1Name,
    player2Name,
    winningScore,
    serveInterval
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (data) => dispatch(postStartGame(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings);