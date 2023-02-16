import React from "react";
import { StyledEngineProvider } from "@mui/material";
import PersistentDrawerLeft from "./components/demo";

export const App = () => {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <PersistentDrawerLeft />
      </StyledEngineProvider>
    </React.StrictMode>
  );
};
