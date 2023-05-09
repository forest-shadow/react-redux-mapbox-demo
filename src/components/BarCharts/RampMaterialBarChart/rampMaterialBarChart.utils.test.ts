import {getMaterialChartData} from "./rampMaterialBarChart.utils";
import boatRampsMock from 'mocks/boatRamps.mock.json'
import {IBoatRampsData} from "types/BoatRamps.types";

describe('rampMaterialBarChart.utils', () => {
  describe('getMaterialChartData', () => {
    it('should provide ramp material labels and counter', () => {
      const result = getMaterialChartData(boatRampsMock as IBoatRampsData);
      expect(result.rampMaterialCounter).toStrictEqual({ Gravel: 1, Concrete: 2 });
      expect(result.rampMaterialLabels).toStrictEqual([ 'Concrete', 'Gravel' ]);
    });
  })
});