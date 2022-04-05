import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Map from 'react-map-gl';

import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const APP_BAR_HEIGHT = 64;

const App = () => {
  console.log(process.env)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VertexTest
          </Typography>
        </Toolbar>
      </AppBar>
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: '100%', height: window.innerHeight - APP_BAR_HEIGHT}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </Box>
  );
}

export default App;
