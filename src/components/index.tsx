import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import { CustomDrawer } from "./CustomDrawer/CustomDrawer";
import { DrawerHeader } from "./CustomDrawerHeader/CustomDrawerHeader.styles";
import { Header } from "./Header/Header";

export const MainPage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header open={drawerOpen} handleDrawerOpen={toggleDrawer} />
      <CustomDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        Content
      </Box>
    </Box>
  );
};
