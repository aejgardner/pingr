import React from "react";
import Settings from "../Settings";
import Header from "../Header";
import GamePlay from "../GamePlay";
import GameHistory from "../GameHistory";

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

      <GameHistory />
    </>
  );

export default App;
