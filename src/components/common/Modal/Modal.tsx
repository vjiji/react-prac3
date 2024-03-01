import { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return <>{isOpen && <ModalBackgrounds>{children}</ModalBackgrounds>}</>;
};

export default Modal;

const ModalBackgrounds = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(221, 221, 221, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
