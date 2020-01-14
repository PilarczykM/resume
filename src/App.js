import React from "react";
import { GlobalStyle } from "./theme/GlobalStyle";
import MainTemplate from "./template/MainTemplate";
import Title from "./components/molecules/Title/Title";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainTemplate>
        <Title title="Marcin Pilarczyk" subtitle="Web Developer" />
      </MainTemplate>
    </React.Fragment>
  );
}

export default App;
