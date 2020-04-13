import React from "react";

const StateContext = React.createContext({});

export const StateProvider = StateContext.Provider;
export const StateConsumer = StateContext.Comsumer;

export default StateContext;
