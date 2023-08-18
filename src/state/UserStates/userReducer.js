import { actionTypes } from "./actionTypes";
export const initialState = {
  loading: false,
  users: [],
  error: false,
};
export const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
        return{
            ...state,
            loading:true,
            error: false
        }
    case actionTypes.FETCHING_SUCCESS:
        return{
            ...state,
            loading:false,
            users: action.payload,
            error: false
        }
    case actionTypes.FETCHING_ERROR:
        return{
            ...state,
            loading:false,
            error: true
        }
    default:
      state;
  }
};

export const userProfileReducer = (state, action)=> {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return{
                ...state,
                loading:true,
                error: false
            }
        case actionTypes.FETCHING_SUCCESS:
            return{
                ...state,
                loading:false,
                users: action.payload,
                error: false
            }
        case actionTypes.FETCHING_ERROR:
            return{
                ...state,
                loading:false,
                error: true
            }
        default:
          state;
      }
}
