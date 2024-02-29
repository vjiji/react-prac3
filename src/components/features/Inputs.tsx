import { BasicInput } from "components/common/Input";
import useHandleInputChange from "hooks/useHandleInputChange";
import { useState } from "react";
import styled from "styled-components";

const Inputs = () => {
  const [text, setText] = useState("");

  const { value, handleInputChange } = useHandleInputChange(text, setText);
  return (
    <InputsLayout>
      <BasicInput title="이름" value={value} onChange={handleInputChange} />
      {/* <BasicInput title="가격" /> */}
      <button>저장</button>
    </InputsLayout>
  );
};

export default Inputs;

const InputsLayout = styled.div`
  display: flex;
  gap: 30px;
`;
