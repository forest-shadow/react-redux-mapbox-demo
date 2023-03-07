export enum BOAT_RAMPS_SIZE_CATEGORY {
  SMALL = '[0, 50)',
  MEDIUM = '[50, 200)',
  LARGE = '[200, 526)'
}
const boatRampsSizesMap = {
  [BOAT_RAMPS_SIZE_CATEGORY.SMALL]: [0, 50],
  [BOAT_RAMPS_SIZE_CATEGORY.MEDIUM]: [50, 200],
  [BOAT_RAMPS_SIZE_CATEGORY.LARGE]: [200, 526]
};
export const boatRampSizesConfigCollection = [
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
];