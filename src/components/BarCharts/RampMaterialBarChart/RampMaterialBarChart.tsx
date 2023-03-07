import {BoatRampBarChart} from "components/BarCharts/BoatRampBarChart";
import {useRampMaterialBarChart} from "components/BarCharts/RampMaterialBarChart/useRampMaterialBarChart";
import {BOAT_RAMP_FILTER_NAME, IBoatRampsData} from "types/BoatRamps.types";
import {IFilterState} from "store/reducer/filterReducer";

interface IRampMaterialBarChart {
  boatRampsData: IBoatRampsData;
  setBoatRampsFilter: (value: IFilterState) => void;
}
export const RampMaterialBarChart = ({
  boatRampsData,
  setBoatRampsFilter
}: IRampMaterialBarChart) => {
  const {
    rampMaterialCounter,
    rampMaterialLabels
  }= useRampMaterialBarChart(boatRampsData);

  return (
    <BoatRampBarChart
      title="Boat ramps by material"
      rampLabels={rampMaterialLabels}
      rampCounter={rampMaterialCounter}
      barClickHandler={datapoint => {
        setBoatRampsFilter({
          value: datapoint.x as string,
          name: BOAT_RAMP_FILTER_NAME.MATERIAL
        })
      }}
      hintLabels={{
        x: "Material",
        y: "Boat ramps"
      }}
    />
  )
}