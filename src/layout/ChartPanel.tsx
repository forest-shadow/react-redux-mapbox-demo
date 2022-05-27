import React from "react";
import Box from "@mui/material/Box";
import {BoatRampsByMaterial, BoatRampsBySize} from "components/BarCharts";
import {useSelector} from "react-redux";
import {boatRampsSelector} from "store/selectors";

export const ChartPanel = () => {
  const boatRampsData = useSelector(boatRampsSelector);
  const setBoatRampsFilter = () => ({});
  return (
    <Box
      width="20%"
      padding="20px"
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
  )
}