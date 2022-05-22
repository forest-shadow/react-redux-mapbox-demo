import React, {Dispatch, useState} from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  Hint
} from 'react-vis';
import {MultiPolygon, Feature} from "geojson";
import {Box, Button} from "@mui/material";
import {BOAT_RAMP_FILTER_NAME, IBoatRampsFilterConfig} from "../../App";
import {IBoatRampsData} from "../../types/BoatRamps.types";

interface IBarChart {
  boatRampsData: IBoatRampsData;
  setBoatRampsFilter: Dispatch<IBoatRampsFilterConfig | null>;
}

enum BOAT_RAMPS_SIZE_CATEGORY {
  SMALL = '[0, 50)',
  MEDIUM = '[50, 200)',
  LARGE = '[200, 526)'
}
const boatRampsSizesMap = {
  [BOAT_RAMPS_SIZE_CATEGORY.SMALL]: [0, 50],
  [BOAT_RAMPS_SIZE_CATEGORY.MEDIUM]: [50, 200],
  [BOAT_RAMPS_SIZE_CATEGORY.LARGE]: [200, 526]
}
const boatRampSizesConfigCollection = [
  {
    label: BOAT_RAMPS_SIZE_CATEGORY.SMALL,
    range: boatRampsSizesMap[BOAT_RAMPS_SIZE_CATEGORY.SMALL]
  },
  {
    label: BOAT_RAMPS_SIZE_CATEGORY.MEDIUM,
    range: boatRampsSizesMap[BOAT_RAMPS_SIZE_CATEGORY.MEDIUM]
  },
  {
    label: BOAT_RAMPS_SIZE_CATEGORY.LARGE,
    range: boatRampsSizesMap[BOAT_RAMPS_SIZE_CATEGORY.LARGE]
  },
]

export const BoatRampsBySize = ({boatRampsData, setBoatRampsFilter}: IBarChart) => {
  const [currentBarData, setCurrentBarData] = useState<Record<string, string> | null>();

  const rampsCounter: {[key: string]: number} = boatRampsData.features.reduce((acc: {[key: string]: number}, feature: Feature<MultiPolygon>) => {
    const currentCategorySizeConfig = boatRampSizesConfigCollection.find(({range}) => feature.properties?.area_ >= range[0] && feature.properties?.area_ <=range[1])

    if(currentCategorySizeConfig) {
      if(acc[currentCategorySizeConfig.label])
        acc[currentCategorySizeConfig.label]++
      else acc[currentCategorySizeConfig.label] = 1
    }
    return acc;
  }, {});
  const rampSizeLabels = Object.values(BOAT_RAMPS_SIZE_CATEGORY);

  return (
    <div style={{position: 'relative'}}>
      <h3>Boat ramps by size</h3>
      <Box>
        <Button onClick={() => {setBoatRampsFilter(null)}}>Reset Filters</Button>
      </Box>
      <XYPlot xType="ordinal" width={260} height={260} stackBy="y"
        margin={{bottom: 100}}
        onMouseLeave={() => setCurrentBarData(null)}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis
          tickLabelAngle={-45}
          style={
            {
              text: {fontSize: '12px'}
            }
          } />
        <YAxis />
        {rampSizeLabels && rampsCounter && rampSizeLabels.map((rampSizeLabel) => (
          <VerticalBarSeries
            key={rampSizeLabel as string}
            data={[{ x: rampSizeLabel as string, y: rampsCounter[rampSizeLabel as string]}]}
            barWidth={1}
            onValueMouseOver={(datapoint) => {
              setCurrentBarData(datapoint)
            }}
            onValueMouseOut={()=>{
              setCurrentBarData(null)
            }}
            onValueClick={datapoint => {
              const currentConfig = boatRampSizesConfigCollection.find(boatRampSizesConfig => boatRampSizesConfig.label === datapoint.x)
              setBoatRampsFilter({
                value: datapoint.x as string,
                name: BOAT_RAMP_FILTER_NAME.AREA,
                range: currentConfig && currentConfig.range,
              })
            }}
          />
        ))}
        {currentBarData ? <Hint value={currentBarData}>
          <div style={{background: 'black', color: 'white', padding: '0 6px', opacity: '0.8'}}>
            <p>Boat ramps: {currentBarData.y}</p>
            <p>Size range: {currentBarData.x}</p>
          </div>
        </Hint> : null}
      </XYPlot>
    </div>
  );
};
