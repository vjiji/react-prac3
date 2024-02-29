import BasicInput, { BasicInputProps } from "./BasicInput";
import { formatPriceWithComma } from "components/utils/formatPriceWuthComma";

interface PriceInputProps extends BasicInputProps {}

const PriceInput = ({ title, value, onChange }: PriceInputProps) => {
  const lastChar = value[value.length - 1];
  const commafilteredValue = value.split(",").join("");

  value =
    Number(lastChar) >= 0
      ? formatPriceWithComma(commafilteredValue)
      : value.slice(0, value.length - 1);

  return (
    <BasicInput title={title} value={value} onChange={onChange} type="number" />
  );
};

export default PriceInput;
