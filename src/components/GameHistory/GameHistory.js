import React from 'react';

const GameHistory = ({
    gameHistory,
    handleDelete,
    handleContinue,
}) => (
        <div className="container">
            <h4 className="p-4 m-0 bg-info text-white border border-info rounded text-center">
                Game History
            </h4>
            <table className="table border border-secondary rounded table-striped bg-light">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Game #</th>
                        <th scope="col">Player</th>
                        <th scope="col">
                            Wins/Loss
                        </th>
                        <th scope="col">Score</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {gameHistory.map((game, i) => (
                        <React.Fragment key={i}>
                            <tr>
                                <th scope="row" rowSpan="2">{game.id}</th>
                                <td>
                                    {`Player 1: ${game.player_1.name}`}
                                </td>
                                {game.complete ? (game.player_1.won ?
                                    <td className="table-success">
                                        Wins
                                    </td> :
                                    <td className="table-danger">
                                        Loss
                                    </td>) :
                                    <th
                                        className="table-warning"
                                        scope="row"
                                        rowSpan="2"
                                    >
                                        Not Complete
                                    </th>
                                }
                                <td>{game.player_1.score}</td>
                                <td>
                                    {!game.complete ?
                                        <button
                                            className="btn btn-outline-primary btn-sm"
                                            onClick={() => handleContinue(game.id)} // load the game where it left off
                                        >
                                            Continue
                                        </button> :
                                        null
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {`Player 2: ${game.player_2.name}`}
                                </td>
                                {game.complete ? (game.player_2.won ?
                                    <td className="table-success">
                                        Wins
                                    </td> :
                                    <td className="table-danger">
                                        Loss
                                    </td>) : null
                                }
                                <td>{game.player_2.score}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDelete(game.id)}
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );

export default GameHistory;