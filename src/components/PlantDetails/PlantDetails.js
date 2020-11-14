import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantDetails extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <h2>Plant Details</h2>
      </div>
    );
  }
}

export default connect()(PlantDetails);
