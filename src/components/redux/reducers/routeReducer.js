import { SET_ROUTE } from "../actionType";

const initialState = {
  route: "HOME",
};

export const routeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROUTE:
      return {
        ...state,
        route: payload,
      };

    default:
      return state;
  }
};
