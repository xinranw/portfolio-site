import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
