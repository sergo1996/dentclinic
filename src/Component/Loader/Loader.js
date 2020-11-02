//Core
import React from "react";
import Loader from "react-loader-spinner";

export default class Loaders extends React.Component {
  render() {
    return <Loader type="Audio" color="blue" height={80} width={80} />;
  }
}
