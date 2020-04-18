import React from 'react';
import {Card} from '../card/card.component';

import './card-list.css';

export function CardList ({robots}) {

    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key = {i} id = {user.id} name = {user.name} email = {user.email}
                         />                           
                    )
                })
            }
        </div>
 
    );
}
