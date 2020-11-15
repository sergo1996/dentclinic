import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import ButtonViev from "../Component/BlockButton/BlockButton";

import NotFound from "../views/NotFoundPage/NotFoundPage";
import PrivateRoute from "../services/PrivateRoute";
import routes from "../services/routes";

import { Route } from "react-router-dom";

import Loaders from "./Loader/Loader";
import Container from "../Component/Container/Container";

const App = () => (
  <Container>
    <Suspense fallback={<Loaders onLoad={true} />}>
      <Switch>
        {routes.map((route) => (
          <PrivateRoute key={route.path} {...route} />
        ))}
        <Route component={NotFound} />
      </Switch>
      <ButtonViev />
    </Suspense>
  </Container>
);

export default App;
