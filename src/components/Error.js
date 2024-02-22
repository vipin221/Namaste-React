import React from 'react';
import { useRouteError } from 'react-router-dom';



const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Opps!!</h1>
        <h2>{err.status}: {err.statusText}</h2>
        <p>{err.data}</p>
        <p>page Not Found</p>
      
    </div>
  )
}

export default Error;
