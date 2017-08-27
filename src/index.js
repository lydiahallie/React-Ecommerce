import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Contact from './components/Contact';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
