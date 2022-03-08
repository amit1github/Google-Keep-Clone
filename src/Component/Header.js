import React from "react";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { NoteAdd } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <NoteAdd sx={{ fontSize: 34 }} />
          <Typography variant="h6">Google Keep</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
