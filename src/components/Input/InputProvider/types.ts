import { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormSetFocus,
} from "react-hook-form";

type InputMaskType =
  | "phone"
  | "card"
  | "drive"
  | "number"
  | "business"
  | "price";

type InputContainerProps = {
  prefixPlaceholder?: string;
  suffixPlaceholder?: string;
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
  size?: 40 | 48;
  disabled?: boolean;
  disabledRenderSuffixElement?: boolean;
  borderLess?: boolean;
} & PropsWithChildren;

type TControl<T extends FieldValues> = {
  control: any;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

type CustomInputProps<T extends FieldValues> = {
  setFocus?: UseFormSetFocus<T>;
};

type InputProviderProps<T extends FieldValues> = TControl<T> &
  CustomInputProps<T> &
  PropsWithChildren & { type?: HTMLInputTypeAttribute };

type InputContextType<T extends FieldValues> = InputProviderProps<T> & {
  isDivFocus: boolean;
  handleDivFocus: () => void;
  handleDivBlur: () => void;
  setFocusInput: () => void;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  mask?: InputMaskType;
};

export type {
  TControl,
  InputContextType,
  InputProviderProps,
  InputType,
  InputContainerProps,
  InputMaskType,
};
