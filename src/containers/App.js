import React, { Component } from 'react';
import ErrorBoundary from '../components/errorBoundary/errorBoundary.component'
import { Scroll } from '../components/scroll/scroll.component';
import { CardList } from '../components/card-list/card-list.component';
import {SearchBox} from '../components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots:[],
      searchFields: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(robots => this.setState({robots}))
  }

  onSearchChange =  (e) => {
    this.setState({searchFields: e.target.value})
  }

  render () {
    const {robots, searchFields} = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFields.toLocaleLowerCase())
    })
    if(!robots.length > 0){
      return (
        <h1 className="tc">RoboFriends Loading</h1>
      )
    }
    return (
      <div className="App tc">
        <h1 className="f2">Robofriends</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
