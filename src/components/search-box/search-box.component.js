import React from 'react';

import './search-box.css';

export function SearchBox ({searchChange}) {

    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robot'
                onChange={searchChange}
            />
        </div>
    );
}
