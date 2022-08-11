export enum Actions {
  LOAD_DATA_BEGIN = 'LOAD_DATA_BEGIN',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE',
}


interface LoadDataBeginAction {
  type: Actions.LOAD_DATA_BEGIN;
}
interface LoadDataSuccessAction {
  type: Actions.LOAD_DATA_SUCCESS;
  payload: any;
}
interface LoadDataFailureAction {
  type: Actions.LOAD_DATA_FAILURE;
  payload: any;
}
// Keep this type updated with each known action
export type ActionTypes = LoadDataBeginAction | LoadDataSuccessAction | LoadDataFailureAction;
