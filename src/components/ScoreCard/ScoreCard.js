import React from 'react';

const ScoreCard = ({
    server,
    player,
    score,
    handleIncrement,
    gameOver,
    playerName
}) => (
        <div className="col-md-6 mt-4">
            <div
                className={(server === +player ? "bg-dark text-white " : "") + "card text-center"}
            >
                <h5 className="card-header">
                    {`Player ${player}: ${playerName}`}
                </h5>
                <div className="card-body">
                    <p className="card-text display-1">{score}</p>
                </div>
                <div className="card-footer">
                    <button
                        className="form-control btn btn-success"
                        onClick={() => handleIncrement(player)}
                        disabled={gameOver}
                    >
                        <i class="far fa-plus-square"></i>
                    </button>
                </div>
            </div>
        </div>
    );

export default ScoreCard;