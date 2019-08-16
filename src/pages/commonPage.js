import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import commonStyle from "../const/commonStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";

export default function CommonPage() {
  const theme = commonStyle();

  return (
    <ThemeProvider theme={theme}>
        // AppBar
        <AppBar position="static" color="primary">
            <Toolbar>
            <Typography variant="h6" color="inherit">
                CANDY CHUPS Patisserie.
            </Typography>
            </Toolbar>
        </AppBar>
        // main contents
    </ThemeProvider>
  );
}
