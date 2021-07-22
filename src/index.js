import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

function Index() {
  return (
    <>
      <Router>
        <App />
      </Router>
    </>
  );
}

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Index />, document.getElementById('root'));
