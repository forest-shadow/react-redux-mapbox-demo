const BOAT_RAMPS_API_URL = "https://raw.githubusercontent.com/forest-shadow/mapbox-demo/main/data/boat_ramps.geojson";

export const fetchRampsData = async () => {
  const response = await fetch(BOAT_RAMPS_API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error. Status: ${response.status}`);
  }
  return response.json();
}