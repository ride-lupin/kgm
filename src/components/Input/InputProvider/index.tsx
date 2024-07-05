import React, { useCallback, useMemo, useState } from "react";
import { FieldValues, useController } from "react-hook-form";

import classNames from "classnames";

import useHasError from "@hooks/useHasError";

import { Invisible, Close, Visible } from "@assets/icons";

import { formatPrice, removeDashes } from "@helper/format";

import IconButton from "../../IconButton";
import Typo from "../../Typo";
import { maskInputValue } from "../utils/mask";
import { getSizeClassNames } from "../utils/size";

import { InputContainerProps, InputProviderProps, InputType } from "./types";
import { BaseInput } from "../BaseInput";
import InputContext, { useInputContext } from "../context";
import style from "../style.css";

function InputProvider<T extends FieldValues>(props: InputProviderProps<T>) {
  const { children, control, name, rules, setFocus, type } = props;
  const [isDivFocus, setIsDivFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(type === "password");

  const handleDivFocus = useCallback(() => setIsDivFocus(true), []);
  const handleDivBlur = useCallback(() => setIsDivFocus(false), []);

  const setFocusInput = () => {
    if (setFocus) setFocus(name);
  };

  const contextValue = useMemo(
    () => ({
      control,
      name,
      rules,
      setFocus,
      isDivFocus,
      handleDivFocus,
      handleDivBlur,
      setFocusInput,
      showPassword,
      setShowPassword,
      type,
    }),
    [
      control,
      name,
      rules,
      setFocus,
      isDivFocus,
      handleDivFocus,
      handleDivBlur,
      setFocusInput,
      showPassword,
      setShowPassword,
      type,
    ],
  );

  return (
    <InputContext.Provider value={contextValue}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem",
          flex: 1,
        }}
      >
        {children}
      </div>
    </InputContext.Provider>
  );
}

function InputContainer({
  disabled,
  prefixElement,
  prefixPlaceholder,
  size = 40,
  suffixElement,
  suffixPlaceholder,
  disabledRenderSuffixElement,
  borderLess,
  children,
}: InputContainerProps) {
  const {
    control,
    name,
    isDivFocus,
    setFocusInput,
    showPassword,
    setShowPassword,
    type,
  } = useInputContext();

  const {
    field: { onChange, value },
    formState: { errors },
  } = useController({ control, name });
  const hasError = !!errors[name]?.message;

  const passwordType = type === "password";

  const {
    input: sizeClassName,
    prefixPlaceholder: placeholderPrefixSuffixClassName,
  } = getSizeClassNames(size);

  const focusClassName = isDivFocus && style.focusBorder;
  const errorClassName = !isDivFocus && hasError && style.error;
  const disabledClassName = disabled ? style.disabled : style.hoverWrapper;
  const inputHasPrefixSuffixPlaceholder = !!(
    prefixPlaceholder || suffixPlaceholder
  );
  const isIconVisible = !!(value && isDivFocus);

  const renderSuffix = () => {
    if (disabledRenderSuffixElement) return null;

    if (borderLess) return null;

    if (suffixElement) {
      return <span>{suffixElement}</span>;
    }

    if (passwordType) {
      return (
        <IconButton
          icon={showPassword ? <Invisible /> : <Visible />}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      );
    }

    return (
      <IconButton
        tabIndex={-1}
        className={classNames(isIconVisible || style.hidden)}
        icon={<Close size={24} />}
        onMouseDown={() => onChange("")}
      />
    );
  };

  return (
    <div
      className={classNames(
        style.wrapper,
        inputHasPrefixSuffixPlaceholder || sizeClassName,
        focusClassName,
        errorClassName,
        disabledClassName,
        borderLess && style.borderLessClassName,
      )}
      onClick={setFocusInput}
      role="none"
    >
      <div className={style.innerWrapper}>
        {prefixPlaceholder && (
          <Typo variants="b7" className={placeholderPrefixSuffixClassName}>
            {prefixPlaceholder}
          </Typo>
        )}
        <div
          className={classNames(
            style.inner,
            inputHasPrefixSuffixPlaceholder ? sizeClassName : "",
          )}
        >
          {prefixElement && <span>{prefixElement}</span>}
          {children}
          {renderSuffix()}
        </div>

        {suffixPlaceholder && (
          <Typo variants="b7" className={placeholderPrefixSuffixClassName}>
            {suffixPlaceholder}
          </Typo>
        )}
      </div>
    </div>
  );
}

// textarea
function OtherContainer({
  disabled,
  prefixElement,
  prefixPlaceholder,
  size = 40,
  suffixElement,
  suffixPlaceholder,
  children,
}: InputContainerProps) {
  const { control, name, isDivFocus, setFocusInput } = useInputContext();
  const { hasError } = useHasError({ control, name });

  const {
    input: sizeClassName,
    prefixPlaceholder: placeholderPrefixSuffixClassName,
  } = getSizeClassNames(size);

  const focusClassName = isDivFocus && style.focusBorder;
  const errorClassName = !isDivFocus && hasError && style.error;
  const disabledClassName = disabled ? style.disabled : style.hoverWrapper;
  const inputHasPrefixSuffixPlaceholder = !!(
    prefixPlaceholder || suffixPlaceholder
  );

  return (
    <div
      className={classNames(
        style.wrapper,
        inputHasPrefixSuffixPlaceholder || sizeClassName,
        focusClassName,
        errorClassName,
        disabledClassName,
      )}
      onClick={setFocusInput}
      role="none"
    >
      <div className={style.innerWrapper}>
        {prefixPlaceholder && (
          <Typo variants="b7" className={placeholderPrefixSuffixClassName}>
            {prefixPlaceholder}
          </Typo>
        )}
        <div
          className={classNames(
            style.inner,
            inputHasPrefixSuffixPlaceholder ? sizeClassName : "",
          )}
        >
          {prefixElement && <span>{prefixElement}</span>}

          {children}

          {suffixElement && <span>{suffixElement}</span>}
        </div>

        {suffixPlaceholder && (
          <Typo variants="b7" className={placeholderPrefixSuffixClassName}>
            {suffixPlaceholder}
          </Typo>
        )}
      </div>
    </div>
  );
}

function InputText(props: InputType) {
  const { type, mask, value, ...rest } = props;
  const { handleDivFocus, handleDivBlur, control, name, rules, showPassword } =
    useInputContext();
  const {
    field: { onBlur, onChange, ...filedRest },
  } = useController({ control, name, rules });

  const getInputType = () => {
    if (type !== "password") return type;

    return showPassword ? "password" : "text";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: targetValue } = e.target;

    switch (mask) {
      case "price":
        onChange(formatPrice(targetValue));
        break;

      case "phone":
      case "business":
      case "card":
        onChange(removeDashes(targetValue));
        break;

      default:
        onChange(targetValue);
    }
  };

  const onBlurEvent = () => {
    onBlur();
    handleDivBlur();
  };

  const formatValue = (inputValue?: string | number) => {
    if (inputValue === undefined || inputValue === null) {
      return "";
    }

    if (mask) {
      const maskValue = maskInputValue(inputValue, mask);
      return maskValue;
    }

    return inputValue;
  };

  return (
    <BaseInput
      {...filedRest}
      {...rest}
      value={formatValue(value || filedRest.value)}
      id={name}
      onFocus={handleDivFocus}
      onBlur={onBlurEvent}
      onChange={handleChange}
      type={getInputType()}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { handleDivFocus, handleDivBlur, control, name, rules } =
    useInputContext();
  const {
    field: { onBlur, ...filedRest },
  } = useController({ control, name, rules });

  const onBlurEvent = () => {
    onBlur();
    handleDivBlur();
  };

  return (
    <textarea
      {...filedRest}
      {...props}
      id={name}
      onFocus={handleDivFocus}
      onBlur={onBlurEvent}
    />
  );
}

const InputCompound = Object.assign(InputProvider, {
  InputContainer,
  OtherContainer,
  InputText,
  TextArea,
});

export default InputCompound;
