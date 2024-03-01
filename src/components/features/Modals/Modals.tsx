import { Button } from "components/button/Button";
import Modal from "components/common/Modal";
import { useState } from "react";
import styled from "styled-components";

const Modals = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);

  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonBox>
        <Button
          onClickFnc={() => setIsFirstModalOpen(!isFirstModalOpen)}
          type="small"
          theme="mint"
        >
          open modal
        </Button>
        <Button
          onClickFnc={() => setIsFirstModalOpen(!isFirstModalOpen)}
          type="large"
          stroke="false"
          bold="true"
          fontco="red"
        >
          open modal
        </Button>
      </ButtonBox>
      <Modal
        isOpen={isFirstModalOpen}
        setModalClose={() => setIsFirstModalOpen(!isFirstModalOpen)}
      />
      <Modal
        isOpen={isSecondModalOpen}
        setModalClose={() => setIsSecondModalOpen(!isSecondModalOpen)}
      />
    </>
  );
};

export default Modals;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
