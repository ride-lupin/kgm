import { spinnerRecipe } from "./style.css";
import type { ButtonProps } from "../type";

type SpinnerProps = Pick<ButtonProps, "size">;

const Spinner = ({ size }: SpinnerProps) => {
  const style = spinnerRecipe({ size });

  return <div className={style} />;
};

export default Spinner;
