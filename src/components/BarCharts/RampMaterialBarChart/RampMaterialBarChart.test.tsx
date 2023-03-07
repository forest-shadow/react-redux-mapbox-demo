import {RampMaterialBarChart} from "./RampMaterialBarChart";
import {render, screen} from "@testing-library/react";
import {IBoatRampsData} from "types/BoatRamps.types";
import boatRampsMock from 'mocks/boatRamps.mock.json'

describe('RampMaterialBarChart', () => {
  it('should be rendered without errors', () => {
    const testMaterialLabels = ['Concrete', 'Gravel'];
    render(
      <RampMaterialBarChart
        boatRampsData={boatRampsMock as IBoatRampsData}
        setBoatRampsFilter={() => {}}
      />
    )
    testMaterialLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});