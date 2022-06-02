import {Button} from "@mui/material";
import {resetFilter} from "store/reducer/filterReducer";
import React from "react";
import {useDispatch} from "react-redux";

export const ResetFilterButton = () => {
  const dispatch = useDispatch();
  const resetFilterHandler = () => {dispatch(resetFilter())}
  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={resetFilterHandler}
    >
      Reset Filters
    </Button>
  )
}