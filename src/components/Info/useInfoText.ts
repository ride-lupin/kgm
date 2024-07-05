import { FieldValues, useController } from "react-hook-form";

import { InfoProps, InfoType } from "./types";

export const useInfoText = <T extends FieldValues>({
  name,
  control,
  defaultInfoText,
  successInfoText,
}: InfoProps<T>) => {
  const {
    formState: { errors, dirtyFields, isSubmitted },
  } = useController({ name, control });
  const errorMessage = errors[name]?.message;

  const isDirtyField = !!dirtyFields[name] && isSubmitted;
  const isShowSuccessText = isDirtyField && successInfoText;

  const getInfoType = (): InfoType => {
    if (errorMessage) return "error";
    if (isDirtyField) return "success";

    return "default";
  };

  const getInfoText = () => {
    if (errorMessage) return String(errorMessage);
    if (isShowSuccessText) return successInfoText;
    if (defaultInfoText && !isSubmitted) return defaultInfoText;
    return "";
  };

  return {
    getInfoText,
    infoType: getInfoType(),
  };
};
