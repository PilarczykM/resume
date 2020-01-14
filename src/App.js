import React from "react";
import { GlobalStyle } from "./theme/GlobalStyle";
import Home from "./pages/Home/Home";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
}

export default App;
