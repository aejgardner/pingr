import initial from './initial';

const startGame = (state, action) => {
    return {
        ...state,
        showSettings: false,
        gameId: action.gameId,
        player1Name: action.player1Name,
        player2Name: action.player2Name,
        winningScore: action.winningScore,
        serveInterval: action.serveInterval,
    }
}

const newGame = (state) => {
    return {
        ...initial,
        language: state.language,
        serveInterval: state.serveInterval,
        winningScore: state.winningScore,
        player1Name: state.player1Name,
        player2Name: state.player2Name
    }; // return initial state, but preserve game history, lanuage, and settings
}

const reducer = (state, action) => {
    switch (action.type) {
        case "NEW_GAME": return newGame(state); // after a game has been won, start a new game
        case "START_GAME": return startGame(state, action); // start a new game from the settings screen
        default: return state;
    }
}

export default reducer;