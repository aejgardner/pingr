import { connect } from 'react-redux';
import GamePlay from './GamePlay';
import { newGame } from '../../data/actions/state';

const mapStateToProps = ({ gameId, language }) => ({ gameId, language })

const mapDispatchToProps = (dispatch) => {
    return {
        handleNewGame: () => {
            dispatch(newGame())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);