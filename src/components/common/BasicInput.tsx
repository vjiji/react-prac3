import styled from "styled-components";

interface InputProps {
  title: string;
}

const BasicInput = ({ title }: InputProps) => {
  return (
    <InputLayout>
      <p>{title}</p>
      <InputStyles />
    </InputLayout>
  );
};

export default BasicInput;

const InputLayout = styled.div`
  display: flex;
  align-items: center;
`;

const InputStyles = styled.input`
  width: 200px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #333;
  border-radius: 8px;

  &:focus {
    outline-color: #333;
  }
`;
