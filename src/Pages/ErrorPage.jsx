import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
  
    return (
        <div>
                <h1>This is Error page.</h1>
                <div>{error.message}</div>;
        </div>
    );
};

export default ErrorPage;