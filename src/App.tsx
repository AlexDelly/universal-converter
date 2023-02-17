import React from "react";
import { StyledEngineProvider } from "@mui/material";
import { MainPage } from "./components";

export const App = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <MainPage />
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
