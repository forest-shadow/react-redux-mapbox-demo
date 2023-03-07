# React: Redux + Mapbox Demo

---
Demo mapbox app demonstrating example of usage redux toolkit for handling complex app state.

![React: Redux + Mapbox Demo App](https://github.com/forest-shadow/react-redux-mapbox-demo/blob/main/app-view.jpg?raw=true)

## Installation instruction

1. Ensure you got node & yarn installed
2. Clone the repo
3. Navigate to the project's root
4. Run `yarn` to install all dependencies
5. Add the `.env` file with your mapbox token
6. `yarn start`

## Implemented features
1. Mapbox integration
2. Two Mapbox layers displaying different aggregated views of provided raw geojson data:
    * location layer
    * area layer
3. Two bar chart statistic components categorizing incoming data by specific aspect:
   * object's material
   * object's area
4. Extension on top of stat charts providing interactive object filtering on chart bar click.
5. Resetting filter state button.
6. Dynamic objects loading on map resize.