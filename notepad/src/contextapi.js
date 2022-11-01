import React, { createContext } from "react";
const context = createContext()
const Providecontext = context.Provider
const Consumecontext = context.Consumer
export { Providecontext, Consumecontext, context }