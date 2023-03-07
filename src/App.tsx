import React from 'react';
import Box from '@mui/material/Box';
import {useWindowSize} from "hooks";
import {AppHeader, APP_HEADER_HEIGHT, ChartPanel} from "layout";
import {MapView, ResetFilterButton} from "components";

function App() {
  const windowSize = useWindowSize();
  const contentSectionHeight = windowSize.height - APP_HEADER_HEIGHT;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppHeader title="React: Redux + Mapbox Demo">
        <ResetFilterButton />
      </AppHeader>

      <Box
        display="flex"
        height={contentSectionHeight}
      >
        <Box
          width="80%"
        >
          <MapView
            mapHeight={contentSectionHeight}
          />
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
