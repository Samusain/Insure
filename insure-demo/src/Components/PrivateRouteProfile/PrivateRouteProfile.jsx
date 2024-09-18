import React from 'react';
import { Navigate } from 'react-router';
// import AccessTokenState from '../StudentPortal/RecoilProfile/AccessTokenState';

const PrivateRouteProfile = ({children}) => {
    const accessToken = localStorage.getItem('userData');
    console.log(accessToken);

  return (
    <div>
        {accessToken
        ?
        <>{children}</>
        :
        // <>{children}</>
        <Navigate to='/login' />
        }
    </div>
  )
}

export default PrivateRouteProfile