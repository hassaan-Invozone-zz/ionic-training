import { Actions } from './index';
import axios from 'axios';

interface DataResponse {
  items: string[];
}

export function loadData() {
  return async dispatch => {
    // Trigger the LOAD_DATA_BEGIN action
    dispatch(loadDataBegin());
    axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
      if (response.status === 200){
        let json: DataResponse = response.data;
        dispatch(loadDataSuccess(json));
        return json;
      }
    }).catch(function (error) {
// Trigger the LOAD_DATA_FAILURE action
        dispatch(loadDataFailure(error));
      });
  };
}

// ACTIONS

// export interface LoadDataBeginAction {
//   type: Actions.LOAD_DATA_BEGIN;
// }

export const loadDataBegin = () => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_BEGIN,
  });
};

// export interface LoadDataSuccessAction {
//   type: Actions.LOAD_DATA_SUCCESS;
//   payload: any;
// }

export const loadDataSuccess = data => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_SUCCESS,
    payload: { data },
  });
};

export interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}

export const loadDataFailure = error => async (dispatch, _getState) => {
  return dispatch({
    type: Actions.LOAD_DATA_FAILURE,
    payload: { error },
  });
};
