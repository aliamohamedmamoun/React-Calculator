 import React from 'react';
 import PropTypes from "prop-types";

 import "./Display.css";



 class Display extends React.Component{

//why static and why propTypes
    static propTypes ={
        value: PropTypes.string,
    };


render(){
    return (
        <div className="component-display">
        <div>{this.props.value}</div>
        </div>
    );
}

 }

 export default  Display;