import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import LeaderBoard from './pages/leaderboard';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/game' component={Game} />
      <Route exact path='/leaderboard' component={LeaderBoard} />
    </Switch>
  );
};
export default Routes;
