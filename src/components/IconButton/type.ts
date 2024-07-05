import React from "react";

import { BaseButtonProps } from "@components/Button/BaseButton";

type IconButtonProps = {
  icon: React.ReactNode;
  hasBorder?: boolean;
} & BaseButtonProps;

export type { IconButtonProps };
