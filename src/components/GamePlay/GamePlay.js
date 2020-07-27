import React from 'react';
import ScoreCard1 from "../ScoreCard/ScoreCard1";
import ScoreCard2 from "../ScoreCard/ScoreCard2";

const GamePlay = ({ gameId, handleNewGame }) => (
    <>
        <h3
            class="text-center bg-warning w-50 m-auto p-4 border border-warning rounded"
        >
            {`Game # ${gameId}`}
        </h3>
        {/* gameplay scores section */}
        <div className="row mb-4">
            <ScoreCard1
                player={1}
            />
            <ScoreCard2
                player={2}
            />
        </div>

        <hr />

        { /* New Game button */}
        <div className="d-flex justify-content-center">
            <button
                className="btn btn-primary"
                onClick={handleNewGame}
            >
                New Game
            </button>
        </div>

        <hr />
    </>
)

export default GamePlay;