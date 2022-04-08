export const getLayerFilterConfig = (rampBoatFilter: string | null) => rampBoatFilter ? ({
  filter: ['==', 'material', rampBoatFilter]
}) : {};