import React, { Component } from 'react';
import { connect } from 'react-redux';

// CUSTOM COMPONENTS
import PlantListItem from '../PlantListItem/PlantListItem';

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
        <ul>
          {this.props.reduxState.plantList.map((item, index) => {
            return <PlantListItem key={index} plant={item} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(PlantList);
