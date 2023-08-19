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