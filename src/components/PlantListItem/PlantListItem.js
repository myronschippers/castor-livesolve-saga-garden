import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantListItem extends Component {
  handleClickDelete = (event) => {
    this.props.dispatch({
      type: 'DELETE_PLANT',
      payload: this.props.plant.id,
    });
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

export default connect()(PlantListItem);
