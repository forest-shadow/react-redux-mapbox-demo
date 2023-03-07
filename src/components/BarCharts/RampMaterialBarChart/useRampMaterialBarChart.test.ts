import {renderHook} from "@testing-library/react";
import {useRampMaterialBarChart} from "./useRampMaterialBarChart";
import boatRampsMock from 'mocks/boatRamps.mock.json'
import {IBoatRampsData} from "types/BoatRamps.types";

describe('useRampMaterialBarChart', () => {
  it('should provide ramp material labels and counter', () => {
    const {result} = renderHook(() => useRampMaterialBarChart(boatRampsMock as IBoatRampsData))
    expect(result.current.rampMaterialCounter).toStrictEqual({ Gravel: 1, Concrete: 2 });
    expect(result.current.rampMaterialLabels).toStrictEqual([ 'Concrete', 'Gravel' ]);
  });
});