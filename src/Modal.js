import React from "react";
import { useState } from "react";
import styled from "styled-components";
import NewModal from "./NewModal";
import { ReactComponent as Close } from "../src/assets/close.svg";

const Modal = ({ setIsOpenModal }) => {
  const [isOpenNewModal, setIsOpenNewModal] = useState(false);
  const openNewModal = () => setIsOpenNewModal(!isOpenNewModal);
  const closeModalHandler = () => setIsOpenModal(false);

  return (
    <ModalBackDrop onClick={closeModalHandler}>
      <ModalLayout onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeaderParagraph>새 카테고리 생성</HeaderParagraph>
          <Close onClick={closeModalHandler} />
        </Header>
        <TextInput type="text" placeholder="카테고리명을 작성하세요" />
        <Footer>
          <FooterParagraph onClick={openNewModal}>저장</FooterParagraph>
          {isOpenNewModal && <NewModal setIsOpenNewModal={setIsOpenNewModal} />}
        </Footer>
      </ModalLayout>
    </ModalBackDrop>
  );
};

export default Modal;

const ModalBackDrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 350px;
  padding: 16px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

const TextInput = styled.input`
  width: 310px;
  height: 30px;
  border-width: 0 0 2px;
  border-bottom: 2px solid #4abeca;

  &::placeholder {
    color: ${({ theme }) => theme.colors.skyBlue};
  }

  &:focus {
    outline: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

const FooterParagraph = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.skyBlue};
  outline: none;
  border: none;
  background: none;
`;
