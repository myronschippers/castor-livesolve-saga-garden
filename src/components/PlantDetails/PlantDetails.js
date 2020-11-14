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
    const { plantDetails } = this.props.store;
    return (
      <div>
        <h2>Plant Details</h2>

        <div>
          <p>
            <strong>Name:</strong> {plantDetails.name}
          </p>
          <p>
            <strong>Kingdom:</strong> {plantDetails.kingdom}
          </p>
          <p>
            <strong>Clade:</strong> {plantDetails.clade}
          </p>
          <p>
            <strong>Order:</strong> {plantDetails.order}
          </p>
          <p>
            <strong>Family:</strong> {plantDetails.family}
          </p>
          <p>
            <strong>Subfamily:</strong> {plantDetails.subfamily}
          </p>
          <p>
            <strong>Genus:</strong> {plantDetails.genus}
          </p>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PlantDetails);
