import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { patchScore } from '../../data/actions/api';

const mapStateToProps = ({
    language,
    server,
    player1,
    winner,
    player1Name
}) => ({
    language,
    server,
    score: player1,
    gameOver: winner !== 0,
    playerName: player1Name
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (player) => dispatch(patchScore(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)