import { createContext, useEffect, useReducer } from "react";
import { IPost, IUser } from "../TypeAndInterfaces/types";

interface IAppContext {
  users: IUser[];
  theUser: IUser | null;
  posts: IPost[];
  dispatch: React.Dispatch<ACTIONTYPE> | any;
}

const initState: IAppContext = {
  users: [],
  theUser: null,
  posts: [],
  dispatch: null,
};
export type Children = {
  children: React.ReactNode;
};
type ACTIONTYPE =
  | { type: "SET_USERS"; payload: any }
  | { type: "SET_USER"; payload: any }
  | { type: "LOG_OUT"; payload: any }
  | { type: "SET_POSTS"; payload: any };

export const reducer = (state: IAppContext, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        theUser: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "LOG_OUT":
      localStorage.setItem("user", JSON.stringify(null));
      return {
        ...state,
        theUser: null,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
  }
};

export const UsersContext = createContext(initState);
export const GlobalUsersProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (
      localStorage.getItem("user") == undefined ||
      localStorage.getItem("user") == null
    ) {
      dispatch({
        type: "SET_USER",
        payload: null,
      });
    } else {
    }
    dispatch({
      type: "SET_USER",
      payload: JSON.parse(localStorage.getItem("user")!),
    });
  }, []);

  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
