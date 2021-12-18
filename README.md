# Ant Design with React

This project is a proof  of concept project for a react app with Ant Design UI and Forms.

## Used 
- **Ant Design** - Forms, Steps, Alert, Tables, Validation, DatePicker, Navigation Menu with Layouts, Message, Notifications, Grid systemm, Buttons, 
- **React redux** -  data load from REST API
- **Page print**


## Used Techologies

- [React](https://reactjs.org/)
- [Ant Design for React](https://ant.design/)
- [Bootstrap](https://getbootstrap.com/)
- [Json server](https://github.com/typicode/json-server)
- [React Redux](https://react-redux.js.org/)


## Available Scripts

React App and Json Server are use to build this application. React app is using 3000 port and json server is using 4000 port. 

## `npm run dev`

Runs the app in the development mode.

### Web Applicaiton
Open [http://localhost:3000](http://localhost:3000) to view **app** in your browser. 

### Json server
Open [http://localhost:4000](http://localhost:4000) to view Json Server in browser.


If do you want to change rest api link in code check `http.common.js` file
```js
export default axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-type": "application/json"
  }
});
```


