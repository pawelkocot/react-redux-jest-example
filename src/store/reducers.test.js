import reducers from './reducers';
import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, DELETE_USER} from './actions';

const defaultState = {
  loading: false,
  loaded:false,
  data: []
};

test('reducers - LOAD_USERS_REQUEST', () => {
  const state = reducers(defaultState, {type: LOAD_USERS_REQUEST});
  expect(state).toEqual({loading:true,loaded:false,data:[]});
});

test('reducers - LOAD_USERS_SUCCESS', () => {
  const state = reducers(defaultState, {type: LOAD_USERS_SUCCESS, payload: [{}, {}]});
  expect(state).toEqual({loading:false,loaded:true,data:[{}, {}]});
});

test('reducers - DELETE_USER', () => {
  const state = reducers({data: [{id: 1}, {id: 2}]}, {type: DELETE_USER, payload: {id: 1}});
  expect(state).toEqual({data:[{id: 2}]});
});
