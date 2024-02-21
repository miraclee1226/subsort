import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../src/assets/close.svg";

const Modal = () => {
  return (
    <ModalLayout>
      <Header>
        <HeaderParagraph>새 카테고리 생성</HeaderParagraph>
        <Close />
      </Header>
      <TextInput type="text" placeholder="카테고리명을 작성하세요" />
      <Footer>
        <FooterParagraph>저장</FooterParagraph>
      </Footer>
    </ModalLayout>
  );
};

export default Modal;

const ModalLayout = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 260px;
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
  width: 220px;
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
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.skyBlue};
  outline: none;
  border: none;
  background: none;
`;
