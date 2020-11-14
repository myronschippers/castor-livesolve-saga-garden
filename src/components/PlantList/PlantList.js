import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantList extends Component {
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({
      type: 'GET_PLANTS',
    });
  }

  render() {
    return (
      <div>
        <h3>This is the plant list</h3>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(PlantList);
