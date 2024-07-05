import { Dispatch, SetStateAction } from "react";

import { TestDriveCarType } from "@type/reservation";

import Button from "@components/Button";

import { optionItemStyle, selectorContainerStyle } from "./style.css";

type SelectorProps = {
  options?: TestDriveCarType[];
  selectedCarModelId: number;
  onSelect: (id: number) => void;
  setImg: Dispatch<SetStateAction<string>>;
};

const Selector = ({
  options = [],
  selectedCarModelId,
  onSelect,
  setImg,
}: SelectorProps) => {
  return (
    <ul className={selectorContainerStyle}>
      {options?.map((option) => (
        <li key={option.carModelId} className={optionItemStyle}>
          <Button
            fullWidth
            variants="border"
            color={
              option.carModelId === selectedCarModelId ? "primary" : "gray"
            }
            onClick={() => {
              onSelect(option.carModelId);
              setImg(option.carModelImageList[0]);
            }}
          >
            {option.carModelName}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Selector;
