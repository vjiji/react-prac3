import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  setModalClose: () => void;
}

const Modal = ({ isOpen, setModalClose }: ModalProps) => {
  if (!isOpen) {
    return null;
  }
  console.log(isOpen);
  return (
    <ModalBackground>
      <ModalStyles>
        <button onClick={setModalClose}>닫기</button>
      </ModalStyles>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalStyles = styled.div`
  width: 50%;
  height: 50%;
  background-color: #fff;
`;
