import React from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {BoatRampsByMaterial, BoatRampsBySize} from "components/BarCharts";
import {boatRampsSelector} from "store/selectors";
import {IFilterState, setFilter} from "store/reducer/filterReducer";

export const ChartPanel = () => {
  const boatRampsData = useSelector(boatRampsSelector);
  const dispatch = useDispatch();
  const setBoatRampsFilter = (filterState: IFilterState) => {dispatch(setFilter(filterState))};
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