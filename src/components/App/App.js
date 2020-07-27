import React from "react";
import Settings from "../Settings";
import Header from "../Header";

const App = ({
  showSettings
}) => (
    <>

      {/* header */}
      <Header />

      <Settings />
    </>
  );

export default App;
