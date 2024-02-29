import useHandleInputChange from "hooks/useHandleInputChange";
import { MouseEventHandler, useState } from "react";

const useInputs = () => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("0");

  const { value: textValue, handleInputChange: handleTextInputChange } =
    useHandleInputChange(text, setText);

  const { value: priceValue, handleInputChange: handlePriceInputChange } =
    useHandleInputChange(price, setPrice);

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!(text && price)) {
      window.alert("이름과 가격을 모두 입력해주세요.");
      return;
    }
    window.alert(`name: ${text},price: ${price}`);
  };

  return {
    textValue,
    priceValue,
    handleTextInputChange,
    handlePriceInputChange,
    handleButtonClick,
  };
};

export default useInputs;
