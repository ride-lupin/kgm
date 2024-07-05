import React from "react";

type BaseButtonElement = React.ElementRef<"button">;

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

const BaseButton = React.forwardRef<BaseButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { onClick, children, type = "button", ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (onClick) onClick(e);
    };

    return (
      <button type={type} ref={ref} onClick={handleClick} {...rest}>
        {children}
      </button>
    );
  },
);

export type { BaseButtonProps };

export default BaseButton;
