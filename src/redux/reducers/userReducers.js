import { rActionTypes } from "../reduxActionTypes/rActiontypes";

const initialState = {
  meals: [],
  options: [
    {
      name: "",
      key: "0asdZ2sadxdddd",
      conditions: [{ key: "0asdZ2sa2" }],
      customField: [{ key: "0asdZ2sad54", label:'' }],
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
            name: "",
            key: action.payload,
            conditions: [{ key: `${state.options.length + 1}` }],
            customField: [{ key: "0" ,label:''}],
          },
        ],
      };

    case rActionTypes.DELETE_OPTION:
      console.log(action.payload);

      return {
        ...state,
        options: state.options.filter((option, i) => i !== action.payload),
      };
    case rActionTypes.CHANGE_OPTION_INPUT_NAME: {
      const newOptions = [...state.options];
      newOptions[action.payload.index].name = action.payload.value;
      return {
        ...state,
        options: newOptions,
      };
    }
    case rActionTypes.CUSTOM_FIELD_LABEL_NAME_CHANGE: {
      console.log(rActionTypes.CUSTOM_FIELD_LABEL_NAME_CHANGE+'-working'+' payload- '+ JSON.stringify(action.payload));
      const newOptions = [...state.options];
      const newCustomFieldArray =
        newOptions[action.payload.optionsIndex].customField;
        newCustomFieldArray[action.payload.customFieldIndex].label= action.payload.value;
       
      return {
        ...state,
        options: newOptions,
      };
    }
    case rActionTypes.CUSTOM_FIELD_TYPE_CHANGE: {
      console.log(rActionTypes.CUSTOM_FIELD_TYPE_CHANGE+'-working'+' payload- '+ JSON.stringify(action.payload));
      const newOptions = [...state.options];
      const newCustomFieldArray =
        newOptions[action.payload.optionsIndex].customField;
        newCustomFieldArray[action.payload.customFieldIndex].type= action.payload.value;
       
      return {
        ...state,
        options: newOptions,
      };
    }

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
        customField: newOptions[optionIndex].customField.filter(
          (item) => item.key != key
        ),
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
