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

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME": return startGame(state, action); // start a new game from the settings screen
        default: return state;
    }
}

export default reducer;