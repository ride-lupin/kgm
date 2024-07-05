import React from "react";
import { FieldValues } from "react-hook-form";

import { InputContextType } from "./InputProvider/types";

function createInputContext<T extends FieldValues>() {
  return React.createContext<InputContextType<T> | null>(null);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputContext = createInputContext<any>();

export function useInputContext() {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error(`cannot be rendered outside the Input component`);
  }
  return context;
}

export default InputContext;
