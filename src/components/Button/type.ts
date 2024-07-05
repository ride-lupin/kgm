import BaseButton from "./BaseButton";
import { ButtonVariants } from "./button.css";

type CustomButtonProps = {
  disabled?: boolean;
  loading?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  className?: string;
} & ButtonVariants;

type ButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof BaseButton>,
  "prefix" | "suffix" | "color"
> &
  CustomButtonProps;

export type { ButtonProps, ButtonVariants };
