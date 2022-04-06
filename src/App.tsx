import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {FeatureCollection, MultiPolygon} from 'geojson';
import {AppHeader} from './components/AppHeader';
import {MapView} from './components/MapView';
import {fetchRampsData} from './utils/api';

import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [boatRampsData, setBoatRampsData] = useState<FeatureCollection<MultiPolygon>>();

  useEffect(() => {
    const getBoatRampsData = async () => {
      const boatRampsData = await fetchRampsData();
      if(boatRampsData) {
        setBoatRampsData(boatRampsData);
      }
    }
    getBoatRampsData()
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppHeader />

      {!!boatRampsData && <MapView boatRampsData={boatRampsData}/> }
    </Box>
  );
}

export default App;
