import React, { Component } from 'react';

class PlantListItem extends Component {
  handleClickDelete = (event) => {
    console.log('plant:', this.props.plant);
  };

  render() {
    return (
      <li>
        {this.props.plant.name}{' '}
        <button onClick={this.handleClickDelete}>DELETE</button>
      </li>
    );
  }
}

export default PlantListItem;
