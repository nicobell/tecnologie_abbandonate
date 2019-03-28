import React, { Component } from 'react';
import MapChart from '../charts/MapChart';
import WorldDots from '../charts/WorldDots';
import TimeSlider from '../layout/TimeSlider';
import CategoryChooser from '../layout/CategoryChooser';

class WorldMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: 1990,
      finish: 2010,
      category: ''
    }
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
  }

  onTimeChange = (value) => {
    this.setState({
      ...this.state,
      start: value[0],
      finish: value[1]
    })
  }

  onCategoryChange = (e, {value}) => {
    this.setState({
      ...this.state,
      category: value
    })
  }

  render() {
    return (
      <div>
      STATE: {this.state.start} , {this.state.finish}, {this.state.category}
      <hr />
      <CategoryChooser category={this.state.category} onChange={this.onCategoryChange} />
      <TimeSlider start={this.state.start} finish={this.state.finish} onChange={this.onTimeChange} />
      <WorldDots selection={this.state} />
      </div>
    )
  }
}

export default WorldMap;
