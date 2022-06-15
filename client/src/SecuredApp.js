import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginCallback, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './components/Home';
import Header from './components/Header';

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-44768689.okta.com/oauth2/default',
  clientId: '0oa4ely1gr7vwVjd65d7',
  redirectUri:  window.location.origin + '/login/callback'
});


function SecuredApp() {

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    window.location.replace(
      toRelativeUrl(originalUri || "/", window.location.origin)
      )

  };

  return (

    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <Header />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login/callback" element={<LoginCallback/>} />
      </Routes>
    </Security>
  );
}

export default SecuredApp;
