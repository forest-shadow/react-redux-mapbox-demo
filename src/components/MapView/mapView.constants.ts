import {LngLatBoundsLike} from 'react-map-gl';

export const APP_BAR_HEIGHT = 64;
export const MAPBOX_STYLES = "mapbox://styles/mapbox/streets-v9";

export const COLORS = {
  blue: '#0080ff'
}

export const goldenCostInitialViewState = {
  longitude: 153.43088,
  latitude: -28.00029,
  zoom: 12
}

export const maxBounds: LngLatBoundsLike = [
  [152.929219, -28.242122], // Southwest coordinates
  [154.050502, -27.627277] // Northeast coordinates
];
