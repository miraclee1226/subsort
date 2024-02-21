import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import { ReactComponent as HeaderYoutubeIcon } from "../src/assets/youtubeIcon.svg";
import { ReactComponent as HeaderProfile } from "../src/assets/profile.svg";
import { ReactComponent as NavAddCircle } from "../src/assets/addCircle.svg";
import { ReactComponent as NavFolder } from "../src/assets/folder.svg";

const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalHandler = () => setIsOpenModal(!isOpenModal);

  return (
    <AppLayout>
      <Header>
        <HeaderLogoBox>
          {/* <HeaderYoutubeIcon /> */}
          <HeaderLogo>SUBSORT</HeaderLogo>
        </HeaderLogoBox>
        <HeaderProfileBox>
          <HeaderUserName>Hey, Lin</HeaderUserName>
          <HeaderProfile />
        </HeaderProfileBox>
      </Header>

      <Main>
        <Navigation>
          <NavList>
            <NavItem onClick={openModalHandler}>
              {isOpenModal ? <Modal /> : null}
              <NavAddCircle />
              <NavItemLabel>카테고리 추가</NavItemLabel>
            </NavItem>
            <ColumnBar />
            <NavItem>
              <NavFolder />
              <NavItemLabel>좋아요 표시한 동영상</NavItemLabel>
            </NavItem>
            <NavItem>
              <NavFolder />
              <NavItemLabel>운동</NavItemLabel>
            </NavItem>
            <NavItem>
              <NavFolder />
              <NavItemLabel>예능</NavItemLabel>
            </NavItem>
          </NavList>
        </Navigation>

        <Content>Videos</Content>
      </Main>
    </AppLayout>
  );
};

export default App;

const AppLayout = styled.div`
  padding: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLogo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xlg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: 8px;
  padding-left: 12px;
`;

const HeaderProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderUserName = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-right: 16px;
`;

const Main = styled.div`
  display: flex;
`;

const Navigation = styled.nav`
  width: 240px;
  height: 700px;
  padding: 12px;
`;

const NavList = styled.ul``;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  width: 216px;
  height: 40px;
  border-radius: 15px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const NavItemLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-left: 12px;
`;

const ColumnBar = styled.div`
  width: 216px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 12px;
`;

const Content = styled.div`
  width: 100%;
  margin-top: 12px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
