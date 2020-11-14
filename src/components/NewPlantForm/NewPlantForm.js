import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (reduxState) => ({
  reduxState,
});

class NewPlantForm extends Component {
  state = {
    newPlant: {
      id: 4,
      name: '',
      kingdom: '',
      clade: '',
      order: '',
      family: '',
      subfamily: '',
      genus: '',
    },
  };

  handleChangeField = (event, propertyKey) => {
    console.log('event happended');
    this.setState({
      newPlant: {
        ...this.state.newPlant,
        [propertyKey]: event.target.value,
      },
    });
  };

  addNewPlant = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_PLANT', payload: this.state.newPlant });
    this.setState({
      newPlant: {
        id: this.state.newPlant.id + 1,
        name: '',
      },
    });
  };

  render() {
    return (
      <div>
        <h3>This is the form</h3>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.addNewPlant}>
          <input
            type="text"
            value={this.state.newPlant.name}
            placeholder="Enter plant name"
            name="name"
            onChange={(event) => this.handleChangeField(event, 'name')}
          />
          <input
            type="text"
            value={this.state.newPlant.kingdom}
            placeholder="Enter plant kingdom"
            name="kingdom"
            onChange={(event) => this.handleChangeField(event, 'kingdom')}
          />
          <input
            type="text"
            value={this.state.newPlant.clade}
            placeholder="Enter plant clade"
            name="clade"
            onChange={(event) => this.handleChangeField(event, 'clade')}
          />
          <input
            type="text"
            value={this.state.newPlant.order}
            placeholder="Enter plant order"
            name="order"
            onChange={(event) => this.handleChangeField(event, 'order')}
          />
          <input
            type="text"
            value={this.state.newPlant.family}
            placeholder="Enter plant family"
            name="family"
            onChange={(event) => this.handleChangeField(event, 'family')}
          />
          <input
            type="text"
            value={this.state.newPlant.subfamily}
            placeholder="Enter plant subfamily"
            name="subfamily"
            onChange={(event) => this.handleChangeField(event, 'subfamily')}
          />
          <input
            type="text"
            value={this.state.newPlant.genus}
            placeholder="Enter plant genus"
            name="genus"
            onChange={(event) => this.handleChangeField(event, 'genus')}
          />
          <input type="submit" value="Add New Plant" />
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewPlantForm);
