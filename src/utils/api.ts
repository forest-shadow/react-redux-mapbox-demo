const BOAT_RAMPS_API_URL = 'https://raw.githubusercontent.com/JRGranell/javascript-challenge/master/data/boat_ramps.geojson'

export const fetchRampsData = async () => {
  const response = await fetch(BOAT_RAMPS_API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error. Status: ${response.status}`);
  }
  return response.json();
}