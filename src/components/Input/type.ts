import { FieldValues } from "react-hook-form";

import type { InfoProps } from "@components/Info/types";

import {
  InputContainerProps,
  InputProviderProps,
  InputType,
  InputMaskType,
} from "./InputProvider/types";

type InputProps<T extends FieldValues> = InputProviderProps<T> &
  Partial<InfoProps<T>> &
  InputType &
  InputContainerProps;

type TextAreaProps<T extends FieldValues> = Omit<
  InputProviderProps<T>,
  "type"
> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  InfoProps<T>;

export type {
  InputProps,
  TextAreaProps,
  FieldValues,
  InputMaskType,
  InputContainerProps,
};
