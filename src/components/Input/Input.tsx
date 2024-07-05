"use client";

import Info from "@components/Info";

import InputCompound from "./InputProvider";
import { InputProps, FieldValues } from "./type";

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const {
    control,
    name,
    rules,
    setFocus,
    prefixPlaceholder,
    suffixPlaceholder,
    prefixElement,
    suffixElement,
    disabledRenderSuffixElement,
    size,
    disabled,
    defaultInfoText,
    successInfoText,
    type,
    borderLess,
    ...rest
  } = props;
  return (
    <InputCompound
      control={control}
      name={name}
      rules={rules}
      setFocus={setFocus}
      type={type}
    >
      <InputCompound.InputContainer
        disabled={disabled}
        prefixElement={prefixElement}
        suffixElement={suffixElement}
        prefixPlaceholder={prefixPlaceholder}
        suffixPlaceholder={suffixPlaceholder}
        size={size}
        borderLess={borderLess}
        disabledRenderSuffixElement={disabledRenderSuffixElement}
      >
        <InputCompound.InputText disabled={disabled} type={type} {...rest} />
      </InputCompound.InputContainer>
      {control && name && (
        <Info
          defaultInfoText={defaultInfoText}
          successInfoText={successInfoText}
          control={control}
          name={name}
        />
      )}
    </InputCompound>
  );
};

export default Input;
