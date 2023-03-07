import {BoatRampBarChart} from "components/BarCharts/BoatRampBarChart";
import {useRampSizeBarChart} from "components/BarCharts/RampSizeBarChart/useRampSizeBarChart";
import {IFilterState} from "store/reducer/filterReducer";
import {boatRampSizesConfigCollection} from "components/BarCharts/RampSizeBarChart/rampSizeBarChart.constants";
import {BOAT_RAMP_FILTER_NAME, IBoatRampsData} from "types/BoatRamps.types";

interface IRampSizeBarChart {
  boatRampsData: IBoatRampsData;
  setBoatRampsFilter: (value: IFilterState) => void;
}
export const RampSizeBarChart = ({
  boatRampsData,
  setBoatRampsFilter
}: IRampSizeBarChart) => {
  const {
    rampSizeCounter,
    rampSizeLabels
  } = useRampSizeBarChart(boatRampsData);

  return (
    <BoatRampBarChart
      title="Boat ramps by size"
      rampLabels={rampSizeLabels}
      rampCounter={rampSizeCounter}
      barClickHandler={datapoint => {
        const currentConfig = boatRampSizesConfigCollection.find(boatRampSizesConfig => boatRampSizesConfig.label === datapoint.x)
        if (currentConfig) {
          setBoatRampsFilter({
            value: datapoint.x as string,
            name: BOAT_RAMP_FILTER_NAME.AREA,
            range: currentConfig.range,
          })
        }
      }}
      hintLabels={{
        x: "Size Range",
        y: "Boat ramps"
      }}
    />
  )
}