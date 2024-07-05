import { FieldPath, FieldValues } from "react-hook-form";

import { ThemeColors, vars } from "@assets/styles/theme.css";

import { CheckCircle, NotiCircle, WarningCircle } from "@assets/icons";

export type InfoProps<T extends FieldValues> = {
  defaultInfoText?: string;
  successInfoText?: string;
  control: any;
  name: FieldPath<T>;
};

export type InfoType = "default" | "success" | "error";

export type InfoMapType = {
  [key in InfoType]: {
    color: ThemeColors;
    icon: React.ReactNode;
  };
};

export const infoMap: InfoMapType = {
  default: {
    color: "gray600",
    icon: <NotiCircle color={vars.colors.gray600} />,
  },
  success: {
    color: "green600",
    icon: <CheckCircle color={vars.colors.green600} />,
  },
  error: {
    color: "red600",
    icon: <WarningCircle color={vars.colors.red600} />,
  },
};
