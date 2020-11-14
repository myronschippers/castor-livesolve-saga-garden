import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PlantListItem extends Component {
  handleClickDelete = (event) => {
    this.props.dispatch({
      type: 'DELETE_PLANT',
      payload: this.props.plant.id,
    });
  };

  handleGoToDetails = (event) => {
    this.props.history.push('/plant/1');
  };

  render() {
    return (
      <li>
        {this.props.plant.name}{' '}
        <button onClick={this.handleClickDelete}>DELETE</button>
        <button onClick={this.handleGoToDetails}>DETAILS</button>
      </li>
    );
  }
}

export default withRouter(connect()(PlantListItem));
