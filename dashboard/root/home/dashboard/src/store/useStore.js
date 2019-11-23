import React, {createContext, useReducer, useContext} from "react";
import {reportsActions, reportsInitialState} from "../actions/reportsActions";

const initialState = {
    ...reportsInitialState
};

const StoreContext = createContext({});

const Actions = {
    ...reportsActions,
};

const reducer = (state, action) => {
    const act = Actions[action.type];
    const update = act(state)(action.data || null);
    return {...state, ...update}
};

export const StoreProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};
export const useStore = () => {
    const { state, dispatch } = useContext(StoreContext);
    return {state, dispatch}
};