# Getting Started with Book Library Manager

This project provides a user-friendly Personal Library Manager to manage a collections of books. Users can add new books, update details and delete it. The widget is designed based on Material UI.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Typescript.

## Instructions for setting up 

Follow these steps to set up and run the application:

- Create a Root Folder:
```mkdir your-app-name
   cd your-app-name
```

- Inside root folder, clone the Frontend Repository.

- Inside root folder, create the Server folder and copy the Node.js mock server.

- Install Dependencies and Start the Application:
```
   cd frontend_folder
   npm run start-app
```

## Requirements

### Widget Functionality:
- Allows users to add a new book.
- Display the books in a table. 
- Allows users to delete a book. 
- Allows users to update a book.
- Allows users to use Mui Datatable filters and pagination features.

### Dependencies

- [React](https://react.dev/): A declarative, efficient, and flexible JavaScript library for building user interfaces.

- [Material UI](https://mui.com/material-ui/): Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

- [Axios](https://axios-http.com/): Axios is a simple promise based HTTP client for the browser and Node.js. Axios provides a simple to use library in a small package with a very extensible interface.

- [SWR](https://swr.vercel.app/):  SWR is a React Hooks library for data fetching.

- [Formik](https://formik.org/): a small group of React components and hooks for building forms in React.

## Available Scripts

In the project directory, you can run:

### `npm start-app`

This script streamlines the initialization process for the application by first installing dependencies for both the React frontend and the Node.js server, and then concurrently starting both components.

Concurrently runs the following commands:

```
   npm run start-react
   npm run start-server
```

### `npm start-react`

Runs the frontend app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm start-server`

Runs the Node.js server app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

 Feel free to contribute to the development of this widget. Submit issues or pull requests to enhance its functionality or address any bugs.
