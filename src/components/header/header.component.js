import React , {Component}from 'react';

export default class Header extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
    render(){
        console.log('Header')
        return(
            <h1 className="f2">Robofriends</h1>
        )
    }
}
