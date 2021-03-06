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
    }; // return initial state, but preserve game history, language, and settings
}

const toggleLanguage = state => {
    return {
        ...state,
        language: state.language === "English" ? "Esperanto" : "English"
    }
}

const saveHistory = (state, action) => {
    return {
        ...state,
        gameHistory: action.gameHistory,
        historyLoaded: true,
    }
}

const removeGame = (state, action) => {
    return {
        ...state,
        gameHistory: state.gameHistory.filter((game) => game.id !== action.id) // filter the game we want to remove from state
    }
}

const resumeGame = (
    state,
    { gameId,
        player1,
        player2,
        player1Name,
        player2Name,
        winningScore,
        serveInterval,
        server
    }) => {
    return {
        ...state,
        showSettings: false,
        gameId,
        player1,
        player2,
        player1Name,
        player2Name,
        winningScore,
        serveInterval,
        server
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_SCORE": return updateScore(state, action); // increment player score
        case "NEW_GAME": return newGame(state); // after a game has been won, start a new game
        case "TOGGLE_LANGUAGE": return toggleLanguage(state); // switch between languages
        case "START_GAME": return startGame(state, action); // start a new game from the settings screen
        case "SAVE_HISTORY": return saveHistory(state, action); // save history from API to state
        case "REMOVE_GAME": return removeGame(state, action);
        case "RESUME_GAME": return resumeGame(state, action);
        default: return state;
    }
}

export default reducer;