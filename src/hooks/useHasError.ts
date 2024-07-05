import { useController } from "react-hook-form";

export type UseHasErrorProps = {
  control: any;
  name: string;
};

const useHasError = ({ control, name }: UseHasErrorProps) => {
  if (!control || !name) {
    return { hasError: false };
  }

  const {
    formState: { errors },
  } = useController({ control, name });
  const hasError = !!errors[name]?.message;

  return { hasError };
};

export default useHasError;
