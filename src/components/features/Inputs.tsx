import { BasicInput, PriceInput } from "components/common/Input";
import useHandleInputChange from "hooks/useHandleInputChange";
import { useState } from "react";
import styled from "styled-components";

const Inputs = () => {
  const [text, setText] = useState("");
  const [price, setPrice] = useState("0");

  const { value: textValue, handleInputChange: handleTextInputChange } =
    useHandleInputChange(text, setText);

  const { value: priceValue, handleInputChange: handlePriceInputChange } =
    useHandleInputChange(price, setPrice);

  return (
    <InputsLayout>
      <BasicInput
        title="이름"
        value={textValue}
        onChange={handleTextInputChange}
      />
      <PriceInput
        title="가격"
        value={priceValue}
        onChange={handlePriceInputChange}
      />
      <button>저장</button>
    </InputsLayout>
  );
};

export default Inputs;

const InputsLayout = styled.div`
  display: flex;
  gap: 30px;
`;
