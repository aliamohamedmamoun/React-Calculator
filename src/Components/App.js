import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

class App extends React.Component {


  render () {
    return(
      <div className="component-app">
      <Display value={"0"} />
      <ButtonPanel />
      </div>
    )
  };

}

export default App;
