import React from "react";
import ReactDOM from "react-dom";
import {Button, DatePicker, version} from "antd";
import "antd/dist/antd.css";
import "../index.css";

export default class UploadComp extends React.Component {

  render() {
    return (
        <div className="App">
          <h1>antd version: {version}</h1>
          <DatePicker/>
          <Button type="primary" style={{marginLeft: 8}}>
            Primary Button
          </Button>
        </div>
    );
  }
}