import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';
import ProductNotFound from '../productNotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CameraHandler}/>
      <Route exact path='/product/not-found' component={ProductNotFound} />
      <Route exact path='/product/:id' component={ProductDisplay}/>
    </Switch>
  </main>
);

export default Main;
