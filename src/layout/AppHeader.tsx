import React from 'react';
import {Box, Toolbar, Typography, AppBar} from "@mui/material";
import {ResetFilterButton} from "components/ResetFilterButton";

export const APP_HEADER_HEIGHT = 65;

export const AppHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React: Redux + Mapbox Demo
          </Typography>
          <ResetFilterButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
