import { SET_SELECTED_CATEGORY } from '../Actions/actionTypes';

const initialState = {
  selectedCategory: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      }
    default:
      return state;
  }
}
