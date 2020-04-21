import React, { Component } from 'react';
import ErrorBoundary from '../components/errorBoundary/errorBoundary.component'
import {connect} from 'react-redux';
import * as actions from '../redux/actions/actions'
import { Scroll } from '../components/scroll/scroll.component';
import { CardList } from '../components/card-list/card-list.component';
import {SearchBox} from '../components/search-box/search-box.component';

import './App.css';

function mapStateToProps(state){
  return {
    searchFields: state.searchRobots.searchFields,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

function mapDispatchToProps(dispatch){
  return {
    onSearchChange: (e) => dispatch(actions.setSearchField(e.target.value)),
    onRequestRobot: () => dispatch(actions.requestRobots()),
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobot();
  }

  render () {
    const {searchFields, onSearchChange, robots, isPending} = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFields.toLocaleLowerCase())
    })
    if(isPending){
      return (
        <h1 className="tc">RoboFriends Loading</h1>
      )
    }
    return (
      <div className="App tc">
        <h1 className="f2">Robofriends</h1>
        <SearchBox searchChange = {onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots = {filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
