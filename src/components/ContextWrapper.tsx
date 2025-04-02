import React from 'react';
import { BrowserRouter } from 'react-router';

function ContextWrapper({ children }: { children: React.ReactElement }) {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default ContextWrapper