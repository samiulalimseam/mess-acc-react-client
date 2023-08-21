import { rActionTypes } from "../reduxActionTypes/rActiontypes";

const initialState = {
  test: "Test",
  meals: [],
  options: [
    {
      key: "0asdZ2sadx",
      conditions: [{ key: "0asdZ2sa2" }],
      customField: [{ key: "0asdZ2sad54" }],
    },
  ],
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
          {
            key: action.payload,
            conditions: [{ key: "0" }],
            customField: [{ key: "0" }],
          },
        ],
      };

    case rActionTypes.DELETE_OPTION:
      console.log(action.payload);

      return {
        ...state,
        options: state.options.filter((option, i) => i !== action.payload),
      };
    case rActionTypes.CHANGE_OPTION_INPUT_NAME:
      return {
        ...state,
        options: [
          {
            ...state.options[action.payload.index],
            name: action.payload.value,
          },
        ],
      };
    case rActionTypes.ADD_CUSTOMFIELD: {

      const { optionIndex, key } = action.payload;
      const newOptions = [...state.options];
      newOptions[optionIndex] = {
        ...newOptions[optionIndex],
        customField: [...newOptions[optionIndex].customField, { key: key }],
      };
      
      return {
        ...state,
        options: newOptions,
      };
    }

      case rActionTypes.DELETE_CUSTOMFIELD: {

        const { optionIndex, key } = action.payload;
        const newOptions = [...state.options];
        newOptions[optionIndex] = {
          ...newOptions[optionIndex],
          customField: newOptions[optionIndex].customField.filter((item)=> item.key != key),
        };
        
        return {
          ...state,
          options: newOptions,
        };
      }

    default:
      return state;
  }
};

export default optionReducer;
