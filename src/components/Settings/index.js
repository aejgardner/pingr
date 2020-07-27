import { connect } from 'react-redux';
import Settings from './Settings';
import { postStartGame } from '../../data/actions/api';

const mapStateToProps = ({
    player1Name,
    player2Name,
    winningScore,
    serveInterval,
    language
}) => ({
    player1Name,
    player2Name,
    winningScore,
    serveInterval,
    language
})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (data) => dispatch(postStartGame(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Settings);