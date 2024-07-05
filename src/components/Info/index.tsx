import React from "react";
import { FieldValues } from "react-hook-form";

import Typo from "@components/Typo";

import { infoMap, InfoProps } from "./types";
import { useInfoText } from "./useInfoText";

const Info = <T extends FieldValues>(props: InfoProps<T>) => {
  const { getInfoText, infoType } = useInfoText(props);
  const infoText = getInfoText();

  if (!infoText) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {infoMap[infoType].icon}
      <Typo
        variants="h9"
        color={infoMap[infoType].color ?? "gray600"}
        style={{ flex: 1 }}
      >
        {infoText}
      </Typo>
    </div>
  );
};

export default Info;
