import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// SAGA IMPORTS
import createSagaMiddleware from 'redux-saga';
import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './App';

// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' },
];

const plantList = (state = startingPlantArray, action) => {
  switch (action.type) {
    case 'SET_PLANT':
      return action.payload;
    case 'ADD_PLANT':
      return [...state, action.payload];
    default:
      return state;
  }
};

//
// SAGAS
// ------------------------------

function* rootSaga() {
  yield takeLatest('GET_PLANTS', getPlants);
  yield takeLatest('POST_PLANT', postPlant);
  yield takeLatest('DELETE_PLANT', deletePlant);
}

function* getPlants(action) {
  try {
    // make AJAX call to GET plants
    const response = yield axios.get('/api/plant');

    yield put({
      type: 'SET_PLANT',
      payload: response.data,
    });
  } catch (err) {
    // surfacing an error message
    console.log('Error getting plants:', err);
  }
}

function* postPlant(action) {
  try {
    yield axios.post('/api/plant', action.payload);
    yield put({
      type: 'GET_PLANTS',
    });
  } catch (err) {
    console.log('Error posting plant:', err);
  }
}

function* deletePlant(action) {
  try {
    yield axios.delete(`/api/plant/${action.payload}`);
    yield put({
      type: 'GET_PLANTS',
    });
  } catch (err) {
    console.log('Error deleting plant:', err);
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);
