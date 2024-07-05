"use client";

import React, { ChangeEvent, useImperativeHandle, useRef } from "react";

import style from "./style.css";

export type BaseSelectRef = {
  focus: () => void;
  blur: () => void;
};

export type BaseInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "size"
> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const BaseInput = React.forwardRef<BaseSelectRef, BaseInputProps>(
  (args, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { value, ...props } = args;

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      blur: () => {
        inputRef.current?.blur();
      },
    }));

    return (
      <input
        ref={inputRef}
        className={style.baseInputStyle}
        value={value || ""}
        {...props}
      />
    );
  },
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
