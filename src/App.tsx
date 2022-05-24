import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import {useDispatch} from "react-redux";
import {AppHeader} from 'components/AppHeader';
import {MapView} from 'components/MapView';
import {BoatRampsByMaterial, BoatRampsBySize} from "components/BarCharts";
import {fetchRampsData} from 'utils/api';
import {getBoatRampsDataThunk} from "store/thunks";
import {TThunkDispatch} from "types/Store.types";
import {IBoatRampsData, IBoatRampsFilterConfig} from "types/BoatRamps.types";

function App() {
  const dispatch = useDispatch<TThunkDispatch>();
  const [boatRampsData, setBoatRampsData] = useState<IBoatRampsData>();

  const [boatRampsFilter, setBoatRampsFilter] = useState<IBoatRampsFilterConfig | null>(null);

  useEffect(() => {
    const getBoatRampsData = async () => {
      const boatRampsData = await fetchRampsData();
      if(boatRampsData) {
        setBoatRampsData(boatRampsData);
      }
    }
    getBoatRampsData()
    dispatch(getBoatRampsDataThunk());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppHeader />

      <Box display="flex">
        <Box width="80%">
          {!!boatRampsData && <MapView boatRampsData={boatRampsData} boatRampsFilter={boatRampsFilter}/> }
        </Box>
        <Box
          width="20%"
          padding="6px 20px"
        >
          <Box
            display="flex"
            justifyContent="center"
          >
            {!!boatRampsData && <BoatRampsByMaterial boatRampsData={boatRampsData} setBoatRampsFilter={setBoatRampsFilter} /> }
          </Box>
          <Box
            display="flex"
            justifyContent="center"
          >
            {!!boatRampsData && <BoatRampsBySize boatRampsData={boatRampsData} setBoatRampsFilter={setBoatRampsFilter} /> }
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
