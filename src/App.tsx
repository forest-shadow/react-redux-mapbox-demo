import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {useDispatch} from "react-redux";
import {AppHeader, ChartPanel, MapView} from './layout';
import {getBoatRampsDataThunk} from "store/thunks";
import {TThunkDispatch} from "types/Store.types";
import {useWindowSize} from "hooks";
import {APP_HEADER_HEIGHT} from "layout/AppHeader";

function App() {
  const dispatch = useDispatch<TThunkDispatch>();
  const windowSize = useWindowSize();
  const contentSectionHeight = windowSize.height - APP_HEADER_HEIGHT;

  useEffect(() => {
    dispatch(getBoatRampsDataThunk());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppHeader />

      <Box
        display="flex"
        height={contentSectionHeight}
        overflow="hidden"
      >
        <MapView
          mapHeight={contentSectionHeight}
        />
        <ChartPanel />
      </Box>
    </Box>
  );
}

export default App;
