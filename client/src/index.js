import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SecuredApp from './SecuredApp';
import { Box } from '@material-ui/core';

ReactDOM.render(
  <Box fixed ="true">
    <React.StrictMode>
      <Router>     
        <SecuredApp />
      </Router>
    </React.StrictMode>
  </Box>,
  document.getElementById('root'),
);

