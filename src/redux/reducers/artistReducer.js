import { GET_ARTIST } from "../actions";

const initialState = {
  artist: []
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload
      };
    default:
      return state;
  }
};

export default artistReducer;
