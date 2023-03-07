import React, {ReactNode} from 'react';
import {Box, Toolbar, Typography, AppBar} from "@mui/material";

export const APP_HEADER_HEIGHT = 65;

interface IAppHeader {
  title: string;
  children: ReactNode;
}
export const AppHeader = ({title, children}: IAppHeader) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box width="100%" display="flex" justifyContent="space-between">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
