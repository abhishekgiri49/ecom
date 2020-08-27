import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomeIndex from "./Home";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends React.Component {


  render () {
    const text = 'Blog';
    return (
        <HomeIndex />
    )
  }
}
export default App;