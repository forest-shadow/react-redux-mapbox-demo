import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {
  Hint,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesPoint,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis
} from "react-vis";
import {BarChartHint} from "./BarChartHint";

interface IBoatBarChart {
  title: string;
  rampLabels: string[];
  rampCounter: {[key: string]: number};
  barClickHandler: (datapoint: VerticalBarSeriesPoint) => void;
  hintLabels: {x: string, y: string}
}
export const BoatRampBarChart = ({
  title,
  rampLabels,
  rampCounter,
  barClickHandler,
  hintLabels
}: IBoatBarChart) => {
  const [currentBarData, setCurrentBarData] = useState<VerticalBarSeriesPoint | null>();
  return (
    <Box position="relative">
      <Typography
       variant="h6"
       component="h3"
       fontWeight="bold"
       style={{ margin:"0 0 10px" }}
      >
       {title}
      </Typography>
      <XYPlot
       xType="ordinal"
       width={260}
       height={260}
       stackBy="y"
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
       {
         rampLabels
         && rampCounter
         && rampLabels.map((rampLabel) => (
            <VerticalBarSeries
               key={rampLabel as string}
               data={[{ x: rampLabel as string, y: rampCounter[rampLabel as string]}]}
               barWidth={1}
               onValueMouseOver={(datapoint)=>{
                 setCurrentBarData(datapoint)
               }}
               onValueMouseOut={() => {
                 setCurrentBarData(null)
               }}
               onValueClick={barClickHandler}
            />
           )
         )
       }

       { currentBarData && (
         <Hint value={currentBarData}>
           <BarChartHint
             chartData={currentBarData}
             xAxisLabel={hintLabels.x}
             yAxisLabel={hintLabels.y}
           />
         </Hint>
       ) }
      </XYPlot>
    </Box>
  );
}