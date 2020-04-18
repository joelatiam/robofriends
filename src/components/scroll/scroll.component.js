import React from 'react';
import './scroll.css';

export function Scroll ({children}) {

    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
            {children}
        </div>
    )
}
