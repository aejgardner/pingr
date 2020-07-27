import { connect } from 'react-redux';
import GameHistory from './GameHistory';
import { deleteGame } from '../../data/actions/api'

const mapStateToProps = ({
    gameHistory,
}) => ({
    gameHistory,
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => dispatch(deleteGame(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameHistory);