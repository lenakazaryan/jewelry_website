import {
  GET_JEWELRY,
  SEARCH_JEWELRY,
  SET_CATEGORY,
  SET_FILTER_VALUE,
} from "../actionType";

const initialState = {
  initialItems: [],
  jewelry: [],
  filteredByCategories: [],
  filteredBySearch: [],
  categories: [],
  searchValue: "",
};

export const jewelryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JEWELRY:
      return {
        ...state,
        initialItems: payload,
        jewelry: payload,
      };

    case SEARCH_JEWELRY:
      return {
        ...state,
        jewelry: payload,
      };

    case SET_CATEGORY:
      let filters = [...state.categories];
      let copyItems = [...state.initialItems];
      const result = [];

      let filterdItemsBySearch = copyItems.filter((item) =>
        item.name.toLowerCase().includes(state.searchValue.toLowerCase())
      );

      if (filters.includes(payload)) {
        filters = filters.filter((item) => item !== payload);
      } else {
        filters.push(payload);
      }

      if (!filters.length) {
        return {
          ...state,
          categories: filters,
          jewelry: filterdItemsBySearch,
        };
      }

      filters.forEach((category) => {
        filterdItemsBySearch.forEach((item) => {
          if (item.type === category) {
            result.push(item);
          }
        });
      });

      return {
        ...state,
        categories: filters,
        jewelry: result,
      };

    case SET_FILTER_VALUE:
      if (payload === "" && !state.categories.length) {
        return {
          ...state,
          jewelry: state.initialItems,
          searchValue: payload,
        };
      } else if (state.categories.length) {
        const result = [];
        const filters = [...state.categories];
        const copyJewelry = [...state.initialItems];

        const filteredElems = copyJewelry.filter((el) => {
          return el.name.toLowerCase().includes(payload.toLowerCase());
        });

        filters.forEach((category) => {
          filteredElems.forEach((item) => {
            if (item.type === category) {
              result.push(item);
            }
          });
        });

        return {
          ...state,
          jewelry: result,
          searchValue: payload,
        };
      } else {
        const copyJewelry = [...state.initialItems];
        const filteredElems = copyJewelry.filter((el) => {
          return el.name.toLowerCase().includes(payload.toLowerCase());
        });
        return {
          ...state,
          jewelry: filteredElems,
          searchValue: payload,
        };
      }

    default:
      return state;
  }
};
