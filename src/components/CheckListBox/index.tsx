import { useId } from "react";

import { vars } from "@assets/styles/theme.css";

import { Check } from "@assets/icons";

import Typo from "@components/Typo";

import { checkListBoxRecipe } from "./style.css";

type CheckListBoxProps = {
  label: string | number;
  value: string | number;
  isChecked: boolean;
  disabled?: boolean;
  onChange: any;
};

const CheckListBox = ({
  label,
  value,
  isChecked,
  disabled = false,
  onChange,
}: CheckListBoxProps) => {
  const id = useId();

  const checkListBoxStyle = checkListBoxRecipe({ isChecked, disabled });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <label htmlFor={id} className={checkListBoxStyle}>
      <input
        style={{ display: "none" }}
        type="checkbox"
        id={id}
        checked={isChecked}
        disabled={disabled}
        value={value}
        onChange={handleChange}
      />
      <Typo
        variants="h8"
        fontWeight="bold"
        color={isChecked ? "blue600" : "gray500"}
        style={{ flex: 1 }}
      >
        {label}
      </Typo>
      <Check color={isChecked ? vars.colors.blue700 : vars.colors.gray500} />
    </label>
  );
};

export default CheckListBox;
