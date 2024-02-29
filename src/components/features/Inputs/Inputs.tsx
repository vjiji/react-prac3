import { BasicInput, PriceInput } from "components/common/Input";
import { useState } from "react";
import styled from "styled-components";
import useInputs from "./useInputs";

const Inputs = () => {
  const {
    textValue,
    priceValue,
    handleTextInputChange,
    handlePriceInputChange,
    handleButtonClick,
  } = useInputs();

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
      <button onClick={handleButtonClick}>저장</button>
    </InputsLayout>
  );
};

export default Inputs;

const InputsLayout = styled.div`
  display: flex;
  gap: 30px;
`;
