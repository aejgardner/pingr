import { connect } from 'react-redux';
import GameHistory from './GameHistory';

const mapStateToProps = ({
    gameHistory,
}) => ({
    gameHistory,
})

export default connect(mapStateToProps)(GameHistory);