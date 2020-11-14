import React, { Component } from 'react';

class PlantListItem extends Component {
  render() {
    return <li>{this.props.plant.name}</li>;
  }
}

export default PlantListItem;
