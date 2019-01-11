import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';

const Main = () => (
  <main>
    <TransitionGroup>
      <CSSTransition classNames="fade" timeout={300}>
        <Switch>
          <Route exact path='/' component={CameraHandler}/>
          <Route path='/product/:id' component={ProductDisplay}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </main>
);

export default Main;
