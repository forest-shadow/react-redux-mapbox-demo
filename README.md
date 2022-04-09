# Instruction

1. Ensure you got node & yarn installed
2. Clone the repo
3. `cd vertex-test`
4. Run `yarn` to install all dependencies
5. Add the `.env` file with your mapbox token
6. `yarn start` the app
7. Profit!!!

### Notes & TODOs:
I did pretty all task points before reaching my time limits:
* map with displaying boat ramps location & areas. Location is suitable for finding ramps on maximum zoom out, while multipolygon areas indicate exact placement on maximum zoom in.
* 2 interactive chart bars displaying ramps number per material or area size category. Clicking on vertical bars works as filtering. 

If I would have more time, I will:
* tried a different approach for displaying locations with information popups. For example, using svg markers. I tried to achieve the same behavior using Points and `interactiveLayerIds`, but that approach was unsuccessful for some reason - related `features` field was not appearing on clicking event. Probably due to some errors in current package version or cause I missed some important parts. I spent pretty much time on it and decided to move along as it was no clear requirement for it.
* tried to implement dynamic location markers appearing based on current zooming phase. It should be working via subscription to zoom event on map instance. On each change, via updated view scope, related locations should be added or deleted from the map.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
