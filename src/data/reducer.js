import initial from './initial';

const updateScore = (
    state,
    { player1,
        player2,
        server,
        winner
    }
) => {
    return {
        ...state,
        player1,
        player2,
        server,
        winner,
    }
}

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

const saveHistory = (state, action) => {
    return {
        ...state,
        gameHistory: action.gameHistory,
        historyLoaded: true,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_SCORE": return updateScore(state, action); // increment player score
        case "NEW_GAME": return newGame(state); // after a game has been won, start a new game
        case "START_GAME": return startGame(state, action); // start a new game from the settings screen
        case "SAVE_HISTORY": return saveHistory(state, action); // save history from API to state
        default: return state;
    }
}

export default reducer;