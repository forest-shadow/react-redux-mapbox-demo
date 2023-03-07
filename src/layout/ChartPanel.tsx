import React from "react";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {RampMaterialBarChart, RampSizeBarChart} from "components/BarCharts";
import {boatRampsSelector} from "store/selectors";
import {IFilterState, setFilter} from "store/reducer/filterReducer";

export const ChartPanel = () => {
  const boatRampsData = useSelector(boatRampsSelector);
  const dispatch = useDispatch();
  const setBoatRampsFilter = (filterState: IFilterState) => {dispatch(setFilter(filterState))};
  return (
    <Box
      padding="20px"
    >
      <Box
        display="flex"
        justifyContent="center"
      >
        {!!boatRampsData && <RampMaterialBarChart boatRampsData={boatRampsData} setBoatRampsFilter={setBoatRampsFilter} /> }
      </Box>
      <Box
        display="flex"
        justifyContent="center"
      >
        {!!boatRampsData && <RampSizeBarChart boatRampsData={boatRampsData} setBoatRampsFilter={setBoatRampsFilter} /> }
      </Box>
    </Box>
  )
}