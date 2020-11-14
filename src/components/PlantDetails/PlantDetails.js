import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlantDetails extends Component {
  state = {
    isStatic: true,
    editPlant: {
      name: '',
      kingdom: '',
      clade: '',
      order: '',
      family: '',
      subfamily: '',
      genus: '',
    },
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  handleEdit = (event) => {
    this.setState({
      isStatic: false,
      editPlant: {
        ...this.props.store.plantDetails,
      },
    });
  };

  handleChangeField = (event, propertyKey) => {
    this.setState({
      editPlant: {
        ...this.state.editPlant,
        [propertyKey]: event.target.value,
      },
    });
  };

  savePlant = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'PUT_PLANT', payload: this.state.editPlant });
    this.setState({
      isStatic: true,
    });
  };

  render() {
    const { plantDetails } = this.props.store;
    return (
      <div>
        <h2>Plant Details</h2>

        {this.state.isStatic === true ? (
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

            <button onClick={this.handleEdit}>Edit</button>
          </div>
        ) : (
          <form onSubmit={this.savePlant}>
            <p>
              <input
                type="text"
                value={this.state.editPlant.name}
                placeholder="Enter plant name"
                name="name"
                onChange={(event) => this.handleChangeField(event, 'name')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.kingdom}
                placeholder="Enter plant kingdom"
                name="kingdom"
                onChange={(event) => this.handleChangeField(event, 'kingdom')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.clade}
                placeholder="Enter plant clade"
                name="clade"
                onChange={(event) => this.handleChangeField(event, 'clade')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.order}
                placeholder="Enter plant order"
                name="order"
                onChange={(event) => this.handleChangeField(event, 'order')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.family}
                placeholder="Enter plant family"
                name="family"
                onChange={(event) => this.handleChangeField(event, 'family')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.subfamily}
                placeholder="Enter plant subfamily"
                name="subfamily"
                onChange={(event) => this.handleChangeField(event, 'subfamily')}
              />
            </p>
            <p>
              <input
                type="text"
                value={this.state.editPlant.genus}
                placeholder="Enter plant genus"
                name="genus"
                onChange={(event) => this.handleChangeField(event, 'genus')}
              />
            </p>
            <input type="submit" value="Save Changes" />
          </form>
        )}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PlantDetails);
