export const newGame = () => {
    return {
        type: "NEW_GAME"
    }
}

export const startGame = (data) => {
    return {
        type: "START_GAME",
        gameId: data.id,
        player1Name: data.player_1.name,
        player2Name: data.player_2.name,
        winningScore: +data.winning_score,
        serveInterval: +data.change_serve
    }
}