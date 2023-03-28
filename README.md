# Elektrikell app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this app about?

The App was created as a project of Frontend courses. It shows the price of electricity in Estonia. It allows to see the range of the lowest and highest prices in a certain time interval.

## How this app works?

The project works with the API to display up-to-date information about electricity prices and times. This information is taken from elering.ee, by using request to: https://dashboard.elering.ee/api.

## Used packages 
### React 18.2.0
React is a JavaScript library for building user interfaces. React makes it painless to create interactive UIs. It's component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. You can develop new features in React without rewriting existing code.
### React-redux 8.0.5
React-redux allows to manage app's state in a single place and keep changes in the app more predictable and traceable. It makes it easier to reason about changes occurring in the app.
### Reduxjs/toolkit 1.9.3
Redux Toolkit is a package that simplifies the process of using Redux in a React application. It provides a set of tools and conventions to make it easier to write Redux code, and to reduce the amount of boilerplate and repetitive code.
### Bootstrap 5.2.3
Bootstrap is powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
### React-bootstrap 2.7.0
React-bootstrap components that are used into the App: Offcanvas, Form, Button, ButtonGroup, ButtonToolbar, Container, Nav, Navbar, Row, Col, Card, Modal, Spinner.
### Moment 2.29.4
Moment is used to work with time. It allows to parse, validate, manipulate, and display dates in javascript. 
### React-countdown 2.3.5
React-countdown is used to know the duration to tne best price.
### Recharts 2.4.1
Recharts is used to display the received data in charts. It's a quick and convinient way to see all actul information about the prices.
### React-dom 18.2.0
React-dom takes care of updating the DOM to match the React elements.
### React-router-dom 6.8.2
React-router-dom is used to create multipage web application from a singlepage web application. In the App it is utilized to define various routes:
```JSX
function App() {
    return (
        <Routes>
            <Route path="/elektrikell" element={<ElektriKell />} />
            <Route path="/elektrikell/:activePrice" element={<ElektriKell />} />
            <Route path="/elektrikell/low/:durationParam" element={<ElektriKell />} />
            <Route path="/elektrikell/about" element={<About />} />
        </Routes>
    );
}

export default App;
```
## How to run the App?
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
