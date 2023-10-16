import { rActionTypes } from "../reduxActionTypes/rActiontypes"

export const addNewOption = (value)=> {
    return {
        type: rActionTypes.ADD_NEW_OPTIONS,
        payload: value
    }
}

export const deleteOption = (index)=> {
   
    return {
        type: rActionTypes.DELETE_OPTION,
        payload: index
    }
}
export const changeName = (index, value)=> {
   
    return {
        type: rActionTypes.CHANGE_OPTION_INPUT_NAME,
        payload: {index: index, value: value}
    }
}
export const changeCustomFieldLabel = (optionsIndex, customFieldIdex, value)=> {
   
    return {
        type: rActionTypes.CUSTOM_FIELD_LABEL_NAME_CHANGE,
        payload: {optionsIndex: optionsIndex, customFieldIndex:customFieldIdex, value: value}
    }
}
export const changeCustomFieldType = (optionsIndex, customFieldIdex, value)=> {
   
    return {
        type: rActionTypes.CUSTOM_FIELD_TYPE_CHANGE,
        payload: {optionsIndex: optionsIndex, customFieldIndex:customFieldIdex, value: value}
    }
}
export const addCustomField = (optionIndex,  key)=> {
   
    return {
        type: rActionTypes.ADD_CUSTOMFIELD,
        payload: {optionIndex: optionIndex, key: key}
    }
}
export const deleteCustomField = (optionIndex, key)=> {
   
    return {
        type: rActionTypes.DELETE_CUSTOMFIELD,
        payload: {optionIndex: optionIndex, key: key}
    }
}