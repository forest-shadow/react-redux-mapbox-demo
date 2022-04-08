import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {FeatureCollection, MultiPolygon} from 'geojson';
import {AppHeader} from './components/AppHeader';
import {MapView} from './components/MapView';
import {fetchRampsData} from './utils/api';

import 'mapbox-gl/dist/mapbox-gl.css';
import {BoatRamspsBarChart} from "./components/BoatRamspsBarChart";

function App() {
  const [boatRampsData, setBoatRampsData] = useState<FeatureCollection<MultiPolygon>>();
  const [boatRampsFilter, setBoatRampsFilter] = useState<string | null>(null);

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

      <Box display="flex">
        <Box width="70%">
          {!!boatRampsData && <MapView boatRampsData={boatRampsData} boatRampsFilter={boatRampsFilter}/> }
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          width="30%"
          padding="14px 20px"
        >
          {!!boatRampsData && <BoatRamspsBarChart boatRampsData={boatRampsData} setBoatRampsFilter={setBoatRampsFilter} /> }
        </Box>
      </Box>
    </Box>
  );
}

export default App;
