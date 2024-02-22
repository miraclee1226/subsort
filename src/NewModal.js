import React from "react";
import styled from "styled-components";
import { ReactComponent as Close } from "../src/assets/close.svg";
import { ReactComponent as Search } from "../src/assets/search.svg";
import { ReactComponent as Folder } from "../src/assets/folder.svg";
import { ReactComponent as CheckBox } from "../src/assets/checkBox.svg";
import { ReactComponent as CheckBoxBlank } from "../src/assets/checkBoxBlank.svg";
import { ReactComponent as Profile } from "../src/assets/profile.svg";

const NewModal = ({ setIsOpenModal, setIsOpenNewModal }) => {
  const closeModalHandler = () => setIsOpenNewModal(false);
  const showMainPage = () => setIsOpenModal(false);

  return (
    <NewCategoryModalLayout>
      <NewCategoryModalContainer>
        <Header>
          <HeaderTitle>
            <Folder />
            <HeaderParagraph>카테고리 추가</HeaderParagraph>
          </HeaderTitle>
          <Close onClick={closeModalHandler} />
        </Header>
        <Main>
          <SearchChannel>
            <Search />
            <TextInput type="text" placeholder="채널명을 검색하세요" />
          </SearchChannel>

          <ChannelList>
            <CheckBox />
            <ChannelProfile />
            <YoutubeChannelName>해쭈</YoutubeChannelName>
            {/* <ColumnBar /> */}
          </ChannelList>
        </Main>
      </NewCategoryModalContainer>
      <Footer>
        <FooterParagraph onClick={showMainPage}>저장</FooterParagraph>
      </Footer>
    </NewCategoryModalLayout>
  );
};

export default NewModal;

const NewCategoryModalLayout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: 450px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const NewCategoryModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-left: 12px;
`;

const Main = styled.main``;

const SearchChannel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const TextInput = styled.input`
  width: 615px;
  height: 30px;
  border-width: 0 0 2px;
  border-bottom: 2px solid #4abeca;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.skyBlue};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  &:focus {
    outline: none;
  }
`;

const YoutubeChannelName = styled.p`
  margin-left: 8px;
`;

const ChannelProfile = styled(Profile)`
  margin-left: 12px;
`;

const ChannelList = styled.div`
  display: flex;
  align-items: center;
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
