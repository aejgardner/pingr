import React from "react";
import Settings from "../Settings";
import Header from "../Header";
import GamePlay from "../GamePlay";

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
    </>
  );

export default App;
