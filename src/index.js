import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Contact from './components/Contact';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
