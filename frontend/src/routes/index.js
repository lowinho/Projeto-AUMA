import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Midia from '../pages/Midia';
import Auma from '../pages/Auma';
import Autismo from '../pages/Autismo';
import Contato from '../pages/Contato';
import Contas from '../pages/Contas';
import Register from '../pages/Register';
import Update from '../pages/Update';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute exact path="/midia" component={Midia} />
      <MyRoute exact path="/contato" component={Contato} />
      <MyRoute exact path="/auma" component={Auma} />
      <MyRoute exact path="/autismo" component={Autismo} />
      <MyRoute exact path="/contas" component={Contas} />
      <MyRoute exact path="/register" component={Register} />
      <MyRoute exact path="/update" component={Update} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
