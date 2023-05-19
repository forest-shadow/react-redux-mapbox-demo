import React from 'react';
import Box from '@mui/material/Box';
import {AppHeader, APP_HEADER_HEIGHT, ChartPanel} from "layout";
import {MapView, ResetFilterButton} from "components";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <AppHeader title="React: Redux + Mapbox Demo">
        <ResetFilterButton />
      </AppHeader>

      <Box
        display="flex"
        flexGrow="1"
      >
        <Box
          width="80%"
        >
          <MapView />
        </Box>

        <Box
          width="20%"
          minWidth="300px"
        >
          <ChartPanel />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
