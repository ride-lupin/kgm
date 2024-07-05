"use client";

import classNames from "classnames";

import Info from "@components/Info";

import baseStyle from "./BaseInput/style.css";
import InputCompound from "./InputProvider";
import style from "./style.css";
import { TextAreaProps, FieldValues } from "./type";

const TextArea = <T extends FieldValues>(props: TextAreaProps<T>) => {
  const {
    control,
    name,
    rules,
    setFocus,
    disabled,
    defaultInfoText,
    successInfoText,
    ...rest
  } = props;
  return (
    <InputCompound
      control={control}
      name={name}
      rules={rules}
      setFocus={setFocus}
    >
      <InputCompound.OtherContainer disabled={disabled}>
        <InputCompound.TextArea
          disabled={disabled}
          className={classNames(baseStyle.baseInputStyle, style.textareaStyle)}
          {...rest}
        />
      </InputCompound.OtherContainer>
      <Info
        defaultInfoText={defaultInfoText}
        successInfoText={successInfoText}
        control={control}
        name={name}
      />
    </InputCompound>
  );
};

export default TextArea;
