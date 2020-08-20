import produce from 'immer';
import * as TYPE from './actionTypes';

export const initState = {
  requesting: false,
  success: false,
  messages: '',
  error: '',
  products: []
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const repeatFormReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TYPE.GET_PRODUCTS_REQUESTING:
        draft.requesting = true;
        draft.success = false;
        draft.error = '';
        break;
      case TYPE.GET_PRODUCTS_SUCCESSFUL:
        draft.requesting = false;
        draft.success = true;
        draft.products = action.data;
        break;
      case TYPE.GET_PRODUCTS_FAILED:
        draft.requesting = false;
        draft.error = action.error;
        break;

      case TYPE.RESET_REDUCER:
        return initState;
    }
  });

export default repeatFormReducer;
