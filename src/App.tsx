import React from "react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Router from "./routes";
import AppProvider from "./hooks";

function App() {
  return (
    <AppProvider>
      <Router />;
    </AppProvider>
  );
}

export default App;
