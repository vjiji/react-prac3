import styled from "styled-components";
import { Button } from "components/button/Button";
import { Modal } from "components/common/Modal";
import useModals from "./useModals";

const Modals = () => {
  const {
    isLeftModalOpen,
    isRightModalOpen,
    leftModalText,
    rightButtonText,
    leftModalButtonProps,
    rightModalButtonProps,
    setIsLeftModalOpen,
    setIsRightModalOpen,
  } = useModals();

  const handleLeftModalClick = () => setIsLeftModalOpen(!isLeftModalOpen);

  const handleRightModalClick = () => setIsRightModalOpen(!isRightModalOpen);

  return (
    <>
      <ButtonBox>
        <Button onClickFnc={handleLeftModalClick} {...leftModalButtonProps}>
          open modal
        </Button>
        <Button onClickFnc={handleRightModalClick} {...rightModalButtonProps}>
          open modal
        </Button>
      </ButtonBox>

      <Modal isOpen={isLeftModalOpen}>
        <LeftModalStyles>
          <p>{leftModalText}</p>
          <ButtonBoxInModal>
            <Button
              type="small"
              theme="coral"
              onClickFnc={handleLeftModalClick}
            >
              닫기
            </Button>
            <Button type="small" theme="mint" onClickFnc={handleLeftModalClick}>
              확인
            </Button>
          </ButtonBoxInModal>
        </LeftModalStyles>
      </Modal>
      <Modal isOpen={isRightModalOpen} handleClose={handleRightModalClick}>
        <RightModalStyles>
          <p>{rightButtonText}</p>
          <ButtonInRightModal onClick={handleRightModalClick}>
            X
          </ButtonInRightModal>
        </RightModalStyles>
      </Modal>
    </>
  );
};

export default Modals;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const LeftModalStyles = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

const ButtonBoxInModal = styled.div`
  gap: 5px;
  display: flex;
  justify-content: flex-end;
`;

const RightModalStyles = styled(LeftModalStyles)`
  width: 300px;
  height: 200px;
  white-space: pre-line;
  position: relative;
`;

const ButtonInRightModal = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background: #eee;
  border: 1px solid #333;
  border-radius: 25px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid #333;
  }
`;
