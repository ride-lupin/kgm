import style from "../style.css";

const sizeClassMapping = {
  48: {
    input: style.inputMedium,
    prefixPlaceholder: style.prefixPlaceholder48,
  },
  40: {
    input: style.inputSmall,
    prefixPlaceholder: style.prefixPlaceholder40,
  },
};

const getSizeClassNames = (sizeValue: 48 | 40) => {
  const sizeData = sizeClassMapping[sizeValue] || sizeClassMapping[40];
  return {
    input: sizeData.input,
    prefixPlaceholder: sizeData.prefixPlaceholder,
  };
};

export { getSizeClassNames };
