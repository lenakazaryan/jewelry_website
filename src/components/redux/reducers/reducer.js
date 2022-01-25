import {
  GET_JEWELRY,
  SEARCH_JEWELRY,
  FILTER_JEWELRY,
  SET_FILTER_VALUE,
} from "../actionType";

const initialState = {
  jewelry: [],
  filteredJewelry: [],
  filters: [],
};

export const jewelryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JEWELRY:
      return {
        ...state,
        jewelry: payload,
      };

    case SEARCH_JEWELRY:
      return {
        ...state,
        jewelry: payload,
      };

    case FILTER_JEWELRY:
      state.filters.push(payload);
      return {
        ...state,
      };

    case SET_FILTER_VALUE:
      
      return {
        ...state,
      };

    default:
      return state;
  }
};
