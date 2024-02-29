import Input from "components/common/Input";
import styled from "styled-components";

const Inputs = () => {
  return (
    <InputsLayout>
      <Input />
      <Input />
      <button>저장</button>
    </InputsLayout>
  );
};

export default Inputs;

const InputsLayout = styled.div`
  display: flex;
  gap: 30px;
`;
