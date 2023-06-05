import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/catalog/:slug"  component={Product} />
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/cart"  component={Cart} />
    </Switch>
  );
}

export default Routes;
