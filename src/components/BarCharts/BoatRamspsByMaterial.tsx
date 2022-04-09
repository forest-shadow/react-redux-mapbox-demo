import React, {Dispatch, useState} from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries, Hint,
} from 'react-vis';
import {FeatureCollection, MultiPolygon, Feature} from "geojson";
import {Box, Button} from "@mui/material";
import {BOAT_RAMP_FILTER_NAME, IBoatRampsFilterConfig} from "../../App";

interface IBarChart {
  boatRampsData: FeatureCollection<MultiPolygon>;
  setBoatRampsFilter: Dispatch<IBoatRampsFilterConfig | null>;
}

export const BoatRampsByMaterial = ({boatRampsData, setBoatRampsFilter}: IBarChart) => {
  const [currentBarData, setCurrentBarData] = useState<Record<string, string> | null>();

  const rampsCounter: {[key: string]: number} = boatRampsData.features.reduce((acc: {[key: string]: number}, feature: Feature<MultiPolygon>) => {
    if(acc[feature.properties?.material]) acc[feature.properties?.material]++
      else acc[feature.properties?.material] = 1
    return acc;
  }, {});
  const rampMaterialLabels = Object.keys(rampsCounter).sort((a, b) => a.localeCompare(b, 'en', { ignorePunctuation: true }));

  return (
    <div style={{position: 'relative'}}>
      <h3>Boat ramps by material</h3>
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
        {rampMaterialLabels && rampsCounter && rampMaterialLabels.map((rampMaterialLabel) => (
          <VerticalBarSeries
            key={rampMaterialLabel as string}
            data={[{ x: rampMaterialLabel as string, y: rampsCounter[rampMaterialLabel as string]}]}
            barWidth={1}
            onValueMouseOver={(datapoint)=>{
              setCurrentBarData(datapoint)
            }}
            onValueMouseOut={()=>{
              setCurrentBarData(null)
            }}
            onValueClick={datapoint => {
              setBoatRampsFilter({value: datapoint.x as string, name: BOAT_RAMP_FILTER_NAME.MATERIAL})
            }}
          />
        ))}
        {currentBarData ? <Hint value={currentBarData}>
          <div style={{background: 'black', color: 'white', padding: '0 6px', opacity: '0.8'}}>
            <p>Boat ramps: {currentBarData.y}</p>
            <p>Material: {currentBarData.x}</p>
          </div>
        </Hint> : null}
      </XYPlot>
    </div>
  );
};
