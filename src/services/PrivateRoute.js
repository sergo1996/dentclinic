//Core
import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ path, component }) => {
  return <Route path={path} component={component} />;
};

export default PrivateRoute;
