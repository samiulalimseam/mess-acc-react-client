import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  initialState,
  userProfileReducer,
  userReducer,
} from "../state/UserStates/Userreducer";
import { actionTypes } from "../state/UserStates/actionTypes";
const USER_CONTEXT = createContext();
const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);
  const [userProfileState, userProfileDispatch] = useReducer(
    userProfileReducer,
    initialState
  );
  // get user list
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("https://random-data-api.com/api/v2/users?size=15&is_xml=true")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  // get logged in user data
  useEffect(() => {
    userProfileDispatch({ type: actionTypes.FETCHING_START });
    fetch("https://random-data-api.com/api/v2/users?size=1&is_xml=true")
      .then((res) => res.json())
      .then((data) =>
        userProfileDispatch({
          type: actionTypes.FETCHING_SUCCESS,
          payload: data,
        })
      )
      .catch(() => userProfileDispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  const value = {
    userState,
    userProfileState
  };
  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(USER_CONTEXT);
  return context;
};

export default UserProvider;
