import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { patchScore } from '../../data/actions/api';

const mapStateToProps = ({
    language,
    server,
    player2,
    winner,
    player2Name
}) => ({
    language,
    server,
    score: player2,
    gameOver: winner !== 0,
    playerName: player2Name,
});

const mapDispatchToProps = (dispatch) => ({
    handleIncrement: (player) => dispatch(patchScore(player))
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard)
