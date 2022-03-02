import {createStore} from 'redux'
const initialState = {};

const reducerFn = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'add_article':
      return { ...state, payload };

    default:
      return state;
  }
};

const store = createStore(reducerFn);

export default store;

