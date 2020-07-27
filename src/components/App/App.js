import React from "react";
import Settings from "../Settings";
import Header from "../Header";
import GamePlay from "../GamePlay";
import GameHistory from "../GameHistory";
import Loading from "../Loading";

const App = ({
  showSettings
}) => (
    <>
      {/* header */}
      <Header />

      {/* Settings or Gameplay */}
      {showSettings ?
        <Settings />
        :
        <GamePlay />
      }

      {/* Game History, wrap in loading so we show loading bar until history is loaded from the API */}
      <Loading>
        <GameHistory />
      </Loading>
    </>
  );

export default App;
