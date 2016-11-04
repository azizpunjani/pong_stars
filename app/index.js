import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', function () {
    const NextApp = require('./components/App').default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
