enum NodeEnvironment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

export default {
  mapboxToken: process.env.REACT_APP_MAPBOX_TOKEN,
  isDevEnvironment: process.env.NODE_ENV !== NodeEnvironment.PRODUCTION
};