import { GET_JEWELRY, SEARCH_JEWELRY, SET_ROUTE, SET_CATEGORY, SET_FILTER_VALUE } from "./actionType";

export const getJewelryAction = (payload) => {
  return {
    type: GET_JEWELRY,
    payload,
  };
};

export const searchJewelryAction = (payload) => {
  return {
    type: SEARCH_JEWELRY,
    payload,
  };
};

export const routeAction = (payload) => {
  return {
    type: SET_ROUTE,
    payload,
  };
};

export const setCategory = (payload) => {
  return {
    type: SET_CATEGORY,
    payload,
  };
};

export const setFilterValue = (payload) => {
  return {
    type: SET_FILTER_VALUE,
    payload,
  };
};
