import { GET_ALL_RECIPE } from '../actions/actions';
const initialState = {
  recipes: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPE: {
      return {
        ...state,
        recipes: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Reducer;
