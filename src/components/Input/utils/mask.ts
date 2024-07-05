import { InputMaskType } from "../InputProvider/types";

const removeNonNumericChars = (value: string) =>
  value.replace(/[^0-9.]+|(?<=\..*)\./g, "");

const formatCard = (value: string) => {
  if (value.length === 15) {
    return value.replace(/^(\d{4})(\d{6})(\d{5})$/, "$1-$2-$3");
  }
  return value.replace(/(\d{4})(?=\d)/g, "$1-");
};

const formatDriveNumber = (value: string) => {
  if (value.length >= 2) {
    return value
      .replace(/^(\d{2})(\d{0,2})(\d{0,6})(\d*)/, "$1-$2-$3-$4")
      .replace(/-+$/, "");
  }
  return value;
};

const formatPhoneNumber = (value: string) => {
  return value
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, `$1-$2-$3`);
};

const formatBusinessNumber = (value: string) => {
  if (value.length >= 3) {
    return value
      .replace(/^(\d{3})(\d{0,2})(\d*)/, "$1-$2-$3")
      .replace(/-+$/, "");
  }
  return value;
};

const formatWithCommas = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const maskInputValue = (inputValue: string | number, mask: InputMaskType) => {
  const nonNumericValue = removeNonNumericChars(inputValue.toString());

  switch (mask) {
    case "number":
      return nonNumericValue;

    case "card":
      return formatCard(nonNumericValue);

    case "drive":
      return formatDriveNumber(nonNumericValue);

    case "phone":
      return formatPhoneNumber(nonNumericValue);

    case "business":
      return formatBusinessNumber(nonNumericValue);

    case "price":
      return formatWithCommas(nonNumericValue);

    default:
      return "";
  }
};

export { maskInputValue };
