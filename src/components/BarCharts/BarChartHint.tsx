import {Box} from "@mui/material";
import {VerticalBarSeriesPoint} from "react-vis";

interface IBarChartHint {
  chartData: VerticalBarSeriesPoint;
  xAxisLabel: string;
  yAxisLabel: string;
}
export const BarChartHint = ({
  chartData,
  xAxisLabel,
  yAxisLabel
}: IBarChartHint) => (
  <Box
    padding="0 10px"
    color="white"
    style={{background: 'black', opacity: '0.8'}}
  >
    <p style={{margin: 0}}>{`${yAxisLabel}: ${chartData.y}`}</p>
    <p style={{margin: 0}}>{`${xAxisLabel}: ${chartData.x}`}</p>
  </Box>
);

