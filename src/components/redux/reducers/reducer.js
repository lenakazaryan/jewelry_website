import { GET_JEWELRY, SEARCH_JEWELRY, FILTER_JEWELRY} from "../actionType";

const initialState = {
  jewelry: null,
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
      state.filters.push(payload)
      return {
        ...state,
      };

    default:
      return state;
  }
};
