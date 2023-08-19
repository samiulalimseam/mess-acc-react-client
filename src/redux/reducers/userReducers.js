import { rActionTypes } from "../reduxActionTypes/rActiontypes";

const initialState = {
  test: "Test",
  meals: [],
  options: [{ name: 0, conditions: [{}], customField: [{}] }],
};

export const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case rActionTypes.FETCHING_START:
      return {
        ...state,
        laoding: true,
        error: false,
      };
    case rActionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        laoding: false,
        error: false,
      };

    case rActionTypes.FETCHING_ERROR:
      return {
        ...state,
        laoding: false,
        error: true,
      };
    case rActionTypes.ADD_NEW_OPTIONS:
      return {
        ...state,
        options: [
          ...state.options,
          { name: state.options[state.options.length-1].name + 1, conditions: [{}], customField: [{}] },
        ],
      };

    case rActionTypes.DELETE_OPTION:
      console.log(action.payload);

      return {
        ...state,
        options: state.options.filter((option, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default optionReducer;
